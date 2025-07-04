import { inject, type InjectionKey, onUnmounted, provide, type Ref, ref, toRaw, unref, watch } from "vue";
import { type DrinksViewModel } from "@incutonez/assessments-drinks-spec";
import { type Query, useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { DrinksAPI } from "@/api.ts";
import type { ViewModelIdProp } from "@/components/types.ts";
import { QueryDrinkGET, QueryDrinksGET, QueryDrinksRoot, RouteCreate } from "@/constants.ts";

function getInvalidateQueryPredicate(queryKey: string) {
	return {
		predicate(query: Query) {
			const [parentKey] = query.queryKey;
			if (typeof parentKey === "string") {
				return parentKey.startsWith(queryKey);
			}
			return parentKey === queryKey;
		},
	};
}

export function useGetDrinks() {
	const limit = ref(25);
	const offset = ref(0);
	const records = ref<DrinksViewModel[]>();
	const count = ref<number>();
	const query = useQuery({
		queryKey: [QueryDrinksGET, limit, offset],
		async queryFn() {
			const { data } = await DrinksAPI.getDrinks({
				offset: offset.value,
				limit: limit.value,
			});
			return data;
		},
	});

	watch(query.data, (data) => {
		records.value = data?.data ?? [];
		count.value = data?.total ?? 0;
	}, {
		immediate: true,
	});

	return {
		records,
		count,
	};
}

export function useDeleteDrink() {
	const deleting = ref(false);
	const queryClient = useQueryClient();
	const drinkDelete = useMutation({
		async mutationFn(drinkId: number) {
			return DrinksAPI.deleteDrink(drinkId);
		},
		async onSuccess() {
			await queryClient.invalidateQueries(getInvalidateQueryPredicate(QueryDrinksRoot));
		},
	});

	async function deleteDrink(drinkId: number) {
		deleting.value = true;
		await drinkDelete.mutateAsync(drinkId);
		deleting.value = false;
	}

	return {
		deleting,
		deleteDrink,
	};
}

type TProvideDrinkRecord = ReturnType<typeof provideDrinkRecord>;
const KeyDrinkRecord: InjectionKey<TProvideDrinkRecord> = Symbol("drinkRecord");

export function provideDrinkRecord(drinkId: Ref<ViewModelIdProp>) {
	const saving = ref(false);
	const hasUpdate = ref(false);
	const drinkRecord = ref<DrinksViewModel>();
	const queryClient = useQueryClient();
	const getQuery = useQuery({
		queryKey: [QueryDrinkGET, drinkId],
		async queryFn() {
			const $drinkId = unref(drinkId);
			if ($drinkId === RouteCreate) {
				// Return stubbed record
				return {
					name: "",
					description: "",
				} as DrinksViewModel;
			}
			const { data } = await DrinksAPI.getDrink($drinkId);
			return data;
		},
	});
	const saveMutation = useMutation({
		async mutationFn() {
			const $drinkRecord = unref(drinkRecord);
			if ($drinkRecord) {
				if ($drinkRecord.id) {
					return DrinksAPI.updateDrink($drinkRecord.id, $drinkRecord);
				}
				else {
					return DrinksAPI.createDrink($drinkRecord);
				}
			}
		},
	});

	async function save() {
		saving.value = true;
		await saveMutation.mutateAsync();
		hasUpdate.value = true;
		saving.value = false;
	}

	const provider = {
		saving,
		drinkRecord,
		save,
	};

	provide(KeyDrinkRecord, provider);

	watch(getQuery.data, ($data) => {
		// We toRaw because it's possible $data is a proxy, and we want to clone it, so we don't alter the cached version
		drinkRecord.value = $data && structuredClone(toRaw($data));
	}, {
		immediate: true,
	});

	onUnmounted(async () => {
		if (hasUpdate.value) {
			await queryClient.invalidateQueries(getInvalidateQueryPredicate(QueryDrinksRoot));
		}
	});

	return provider;
}

export function injectDrinkRecord() {
	return inject(KeyDrinkRecord) as TProvideDrinkRecord;
}
