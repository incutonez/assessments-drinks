import { computed, onUnmounted, type Ref, ref, toRaw, unref, watch } from "vue";
import type { ReviewsViewModel } from "@incutonez/assessments-drinks-spec";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { DrinksAPI } from "@/api.ts";
import type { ViewModelIdProp } from "@/components/types.ts";
import { QueryDrinkReviewsGET, RouteCreate } from "@/constants.ts";

export function useGetDrinkReviews(drinkId: Ref<ViewModelIdProp>) {
	const drinkReviews = ref<ReviewsViewModel[]>();
	const enabled = computed(() => drinkId.value !== RouteCreate);
	const query = useQuery({
		enabled,
		queryKey: [QueryDrinkReviewsGET, drinkId],
		async queryFn() {
			const { data } = await DrinksAPI.getDrinkReviews(drinkId.value as number);
			return data;
		},
	});

	watch(query.data, ($data) => drinkReviews.value = structuredClone(toRaw($data)), {
		immediate: true,
	});

	return {
		drinkReviews,
	};
}

export function provideReviewRecord(drinkId: Ref<number>, reviewId: Ref<ViewModelIdProp>) {
	const reviewRecord = ref<ReviewsViewModel>();
	const saving = ref(false);
	const hasUpdate = ref(false);
	const queryClient = useQueryClient();
	const isCreate = computed(() => reviewId.value === RouteCreate);
	const reviewGET = useQuery({
		queryKey: [QueryDrinkReviewsGET, drinkId, reviewId],
		async queryFn() {
			if (isCreate.value) {
				// Return stubbed record
				return {
					description: "",
					drinkId: drinkId.value,
					userName: "You",
					rating: 0,
				} as ReviewsViewModel;
			}
			const { data } = await DrinksAPI.getDrinkReview(drinkId.value, reviewId.value as number);
			return data;
		},
	});
	const reviewMutation = useMutation({
		async mutationFn() {
			const $reviewRecord = unref(reviewRecord);
			if ($reviewRecord) {
				if ($reviewRecord.id) {
					return DrinksAPI.updateDrinkReview(drinkId.value, reviewId.value as number, $reviewRecord);
				}
				else {
					return DrinksAPI.createDrinkReview(drinkId.value, $reviewRecord);
				}
			}
		},
	});

	async function save() {
		saving.value = true;
		await reviewMutation.mutateAsync();
		hasUpdate.value = true;
		saving.value = false;
	}

	const provider = {
		saving,
		save,
		reviewRecord,
	};

	watch(reviewGET.data, ($data) => {
		reviewRecord.value = structuredClone(toRaw($data));
	}, {
		immediate: true,
	});

	onUnmounted(async () => {
		if (hasUpdate.value) {
			await queryClient.invalidateQueries({
				queryKey: [QueryDrinkReviewsGET, drinkId],
			});
		}
	});

	return provider;
}

export function useDeleteReview() {
	const deleting = ref(false);
	const queryClient = useQueryClient();
	const deleteMutation = useMutation({
		async mutationFn({ drinkId, reviewId }: { drinkId: number, reviewId: number }) {
			return DrinksAPI.deleteDrinkReview(drinkId, reviewId);
		},
	});

	async function deleteReview(drinkId: number, reviewId: number) {
		deleting.value = true;
		await deleteMutation.mutateAsync({
			drinkId,
			reviewId,
		});
		await queryClient.invalidateQueries({
			queryKey: [QueryDrinkReviewsGET, drinkId],
		});
		deleting.value = false;
	}

	return {
		deleting,
		deleteReview,
	};
}
