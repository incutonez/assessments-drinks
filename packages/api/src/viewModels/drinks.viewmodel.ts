import { ModelInterface } from "@/types";
import { GetResponseModel } from "@/viewModels/base.list.viewmodel";
import { PicturesViewModel } from "@/viewModels/pictures.viewmodel";
import { ReviewsViewModel } from "@/viewModels/reviews.viewmodel";

export type IDrinksViewModel = ModelInterface<DrinksViewModel>;

export class DrinksViewModel {
	declare name: string;

	declare description: string;

	declare reviews: ReviewsViewModel[];

	declare pictures: PicturesViewModel[];
}

export class DrinksListViewModel extends GetResponseModel<DrinksViewModel>(DrinksViewModel) {

}
