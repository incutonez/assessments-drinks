import { Injectable } from "@nestjs/common";
import { IReviewModel, IReviewModelCreate, ReviewModel } from "@/db/models/ReviewModel";
import { IReviewsViewModel, ReviewsViewModel } from "@/viewModels/reviews.viewmodel";

@Injectable()
export class ReviewsMapper {
	entityToViewModel({ id, user_name, description, rating, drink_id }: ReviewModel): IReviewsViewModel {
		return {
			id,
			description,
			rating,
			drinkId: drink_id,
			userName: user_name,
		};
	}

	viewModelToEntity(viewModel: ReviewsViewModel): IReviewModel {
		const entity = this.viewModelCreateToEntity(viewModel) as IReviewModel;
		entity.id = viewModel.id!;
		return entity;
	}

	viewModelCreateToEntity({ description, userName, rating, drinkId }: ReviewsViewModel): IReviewModelCreate {
		return {
			description,
			rating,
			drink_id: drinkId,
			user_name: userName,
		};
	}
}
