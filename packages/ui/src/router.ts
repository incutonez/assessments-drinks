import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
import {
	RouteCreate, RouteDrinkTabs,
	RouteViewDrink,
	RouteViewDrinkReview,
	RouteViewDrinkReviews,
	RouteViewDrinks,
} from "@/constants.ts";
import ViewDrink from "@/views/ViewDrink.vue";
import ViewDrinks from "@/views/ViewDrinks.vue";
import ViewReview from "@/views/ViewReview.vue";

function parseViewModelId(id: string) {
	return id === RouteCreate ? id : parseInt(id, 10);
}

const routes: RouteRecordRaw[] = [{
	path: "/",
	redirect: {
		name: RouteViewDrinks,
	},
}, {
	path: "/drinks",
	name: RouteViewDrinks,
	component: ViewDrinks,
	children: [{
		path: ":drinkId",
		children: [{
			path: ":tabId",
			component: ViewDrink,
			name: RouteViewDrink,
			props({ params }) {
				const { drinkId, tabId } = params;
				return {
					tabId,
					drinkId: parseViewModelId(drinkId as string),
				};
			},
		}, {
			path: RouteDrinkTabs.Reviews,
			name: RouteViewDrinkReviews,
			component: ViewDrink,
			props({ params }) {
				const { drinkId } = params;
				return {
					tabId: RouteDrinkTabs.Reviews,
					drinkId: parseViewModelId(drinkId as string),
				};
			},
			children: [{
				path: ":reviewId",
				component: ViewReview,
				name: RouteViewDrinkReview,
				props({ params }) {
					const { drinkId, reviewId } = params;
					return {
						drinkId: parseInt(drinkId as string, 10),
						reviewId: parseViewModelId(reviewId as string),
					};
				},
			}],
		}],
	}],
}];

export const router = createRouter({
	routes,
	history: createWebHashHistory(),
});
