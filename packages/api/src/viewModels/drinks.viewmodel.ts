import { ModelInterface } from "@/types";
import { GetResponseModel } from "@/viewModels/base.list.viewmodel";
import { PicturesViewModel } from "@/viewModels/pictures.viewmodel";
import { ReviewsViewModel } from "@/viewModels/reviews.viewmodel";

export type IDrinksViewModel = ModelInterface<DrinksViewModel>;

export class DrinksViewModel {
	id?: number;

	declare name: string;

	declare description: string;

	reviews?: ReviewsViewModel[];

	pictures?: PicturesViewModel[];
}

export class DrinksListViewModel extends GetResponseModel<DrinksViewModel>(DrinksViewModel) {

}
