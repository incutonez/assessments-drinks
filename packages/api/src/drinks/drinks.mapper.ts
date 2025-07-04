import { Injectable } from "@nestjs/common";
import { DrinkModel, IDrinkModel, IDrinkModelCreate } from "@/db/models/DrinkModel";
import { PicturesMapper } from "@/drinks/pictures.mapper";
import { ReviewsMapper } from "@/drinks/reviews.mapper";
import { DrinksViewModel, IDrinksViewModel } from "@/viewModels/drinks.viewmodel";

@Injectable()
export class DrinksMapper {
	constructor(private readonly reviewsMapper: ReviewsMapper, private readonly picturesMapper: PicturesMapper) {
	}

	entityToViewModel({ id, name, description }: DrinkModel): IDrinksViewModel {
		return {
			id,
			name,
			description,
		};
	}

	viewModelCreateToEntity({ name, description }: DrinksViewModel): IDrinkModelCreate {
		return {
			name,
			description,
		};
	}

	viewModelToEntity({ id, name, description }: DrinksViewModel): IDrinkModel {
		return {
			id: id!,
			name,
			description,
		};
	}
}
