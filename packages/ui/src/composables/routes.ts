import { useRouter } from "vue-router";
import type { ViewModelIdProp } from "@/components/types.ts";
import { RouteCreate, RouteViewDrink, RouteViewDrinkReview, RouteViewDrinks } from "@/constants.ts";

export function useViewDrink() {
	const router = useRouter();

	return function(drinkId: number | typeof RouteCreate, tabId = "details") {
		return router.push({
			name: RouteViewDrink,
			params: {
				tabId,
				drinkId,
			},
		});
	};
}

export function useViewDrinks() {
	const router = useRouter();

	return function() {
		return router.push({
			name: RouteViewDrinks,
		});
	};
}

export function useViewReview() {
	const router = useRouter();

	return function(drinkId: number, reviewId: ViewModelIdProp) {
		return router.push({
			name: RouteViewDrinkReview,
			params: {
				drinkId,
				reviewId,
			},
		});
	};
}
