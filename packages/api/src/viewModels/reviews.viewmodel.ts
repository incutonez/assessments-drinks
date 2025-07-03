import { ModelInterface } from "@/types";

export type IReviewsViewModel = ModelInterface<ReviewsViewModel>;

export class ReviewsViewModel {
	declare userName: string;

	declare description: string;

	declare rating: number;
}
