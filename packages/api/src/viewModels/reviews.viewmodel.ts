import { ModelInterface } from "@/types";

export type IReviewsViewModel = ModelInterface<ReviewsViewModel>;

export class ReviewsViewModel {
	id?: number;

	declare drinkId: number;

	declare userName: string;

	declare description: string;

	declare rating: number;
}
