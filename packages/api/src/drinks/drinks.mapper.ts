import { Injectable } from "@nestjs/common";
import { DrinkModel, IDrinkModelCreate } from "@/db/models/DrinkModel";
import { PictureModel } from "@/db/models/PictureModel";
import { ReviewModel } from "@/db/models/ReviewModel";
import { DrinksViewModel, IDrinksViewModel } from "@/viewModels/drinks.viewmodel";
import { IPicturesViewModel } from "@/viewModels/pictures.viewmodel";
import { IReviewsViewModel } from "@/viewModels/reviews.viewmodel";

@Injectable()
export class DrinksMapper {
	entityToViewModel({ name, description, pictures = [], reviews = [] }: DrinkModel): IDrinksViewModel {
		return {
			name,
			description,
			pictures: pictures.map((picture) => this.entityPictureToViewModel(picture)),
			reviews: reviews.map((review) => this.entityReviewToViewModel(review)),
		};
	}

	entityReviewToViewModel({ user_name, description, rating }: ReviewModel): IReviewsViewModel {
		return {
			description,
			rating,
			userName: user_name,
		};
	}

	entityPictureToViewModel({ name, mimetype, path }: PictureModel): IPicturesViewModel {
		return {
			name,
			mimetype,
			path,
		};
	}

	viewModelCreateToEntity({ name, description }: DrinksViewModel): IDrinkModelCreate {
		return {
			name,
			description,
		};
	}
}
