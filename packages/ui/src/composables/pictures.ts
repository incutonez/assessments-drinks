import { computed, type Ref, ref, toRaw, watch } from "vue";
import type { PicturesViewModel } from "@incutonez/assessments-drinks-spec";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { DrinksAPI } from "@/api.ts";
import type { ViewModelIdProp } from "@/components/types.ts";
import { QueryDrinkPicturesGET, RouteCreate } from "@/constants.ts";

// TODOJEF: GETTING A 413... size too large for payload
export function useGetDrinkPictures(drinkId: Ref<ViewModelIdProp>) {
	const drinkPictures = ref<PicturesViewModel[]>();
	const enabled = computed(() => drinkId.value !== RouteCreate);
	const query = useQuery({
		enabled,
		queryKey: [QueryDrinkPicturesGET, drinkId],
		async queryFn() {
			const { data } = await DrinksAPI.getDrinkPictures(drinkId.value as number);
			return data;
		},
	});

	watch(query.data, ($data) => drinkPictures.value = structuredClone(toRaw($data)), {
		immediate: true,
	});

	return {
		drinkPictures,
	};
}

export function useCreatePicture() {
	const savingPicture = ref(false);
	const hasUpdate = ref(false);
	const queryClient = useQueryClient();
	const saveMutation = useMutation({
		async mutationFn({ drinkId, pictureRecord }: {drinkId: number, pictureRecord: PicturesViewModel}) {
			return DrinksAPI.createDrinkPicture(drinkId, pictureRecord);
		},
	});

	async function savePicture(drinkId: number, pictureRecord: PicturesViewModel) {
		savingPicture.value = true;
		await saveMutation.mutateAsync({
			drinkId,
			pictureRecord,
		});
		await queryClient.invalidateQueries({
			queryKey: [QueryDrinkPicturesGET, drinkId],
		});
		hasUpdate.value = true;
		savingPicture.value = false;
	}

	return {
		savingPicture,
		savePicture,
	};
}

export function useDeletePicture() {
	const deleting = ref(false);
	const queryClient = useQueryClient();
	const deleteMutation = useMutation({
		async mutationFn({ drinkId, pictureId }: { drinkId: number, pictureId: number }) {
			return DrinksAPI.deleteDrinkPicture(drinkId, pictureId);
		},
	});

	async function deletePicture(drinkId: number, pictureId: number) {
		deleting.value = true;
		await deleteMutation.mutateAsync({
			drinkId,
			pictureId,
		});
		await queryClient.invalidateQueries({
			queryKey: [QueryDrinkPicturesGET, drinkId],
		});
		deleting.value = false;
	}

	return {
		deleting,
		deletePicture,
	};
}
