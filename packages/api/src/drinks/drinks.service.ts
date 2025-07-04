import { Injectable } from "@nestjs/common";
import { Op, Order, WhereOptions } from "@sequelize/core";
import { DrinkModel } from "@/db/models/DrinkModel";
import { PictureModel } from "@/db/models/PictureModel";
import { ReviewModel } from "@/db/models/ReviewModel";
import { DrinksMapper } from "@/drinks/drinks.mapper";
import { PicturesMapper } from "@/drinks/pictures.mapper";
import { ReviewsMapper } from "@/drinks/reviews.mapper";
import { GetDrinksRequestViewModel } from "@/viewModels/drinks.request.viewmodel";
import { DrinksListViewModel, DrinksViewModel } from "@/viewModels/drinks.viewmodel";
import { PicturesViewModel } from "@/viewModels/pictures.viewmodel";
import { ReviewsViewModel } from "@/viewModels/reviews.viewmodel";

@Injectable()
export class DrinksService {
	constructor(private readonly mapper: DrinksMapper, private readonly reviewsMapper: ReviewsMapper, private readonly picturesMapper: PicturesMapper) {
	}

	async getDrinks({ offset, limit, name, description, sort }: GetDrinksRequestViewModel): Promise<DrinksListViewModel> {
		const where: WhereOptions<DrinkModel> = {};
		const order: Order = [];
		if (name) {
			where.name = {
				[Op.like]: `%${name}%`,
			};
		}
		if (description) {
			where.description = {
				[Op.like]: `%${description}%`,
			};
		}
		if (sort) {
			order.push([sort.field, sort.direction ?? "ASC"]);
		}
		// TODOJEF: use having for minRating/maxRating
		const { rows, count } = await DrinkModel.findAndCountAll({
			offset,
			limit,
			order,
			where,
			distinct: true,
			include: [{
				association: "pictures",
			}, {
				association: "reviews",
			}],
		});

		return {
			data: rows.map((row) => this.mapper.entityToViewModel(row)),
			total: count,
		};
	}

	async getDrink(drinkId: number) {
		const entity = await DrinkModel.findByPk(drinkId);
		if (entity) {
			return this.mapper.entityToViewModel(entity);
		}
	}

	async createDrink(viewModel: DrinksViewModel) {
		const entity = await DrinkModel.create(this.mapper.viewModelCreateToEntity(viewModel), {
			returning: true,
		});
		return this.getDrink(entity.id);
	}

	async updateDrink(viewModel: DrinksViewModel) {
		return DrinkModel.update(this.mapper.viewModelToEntity(viewModel), {
			where: {
				id: viewModel.id,
			},
		});
	}

	async deleteDrink(id: number) {
		return DrinkModel.destroy({
			where: {
				id,
			},
		});
	}

	async getDrinkReviews(drinkId: number) {
		const entities = await ReviewModel.findAll({
			where: {
				drink_id: drinkId,
			},
		});
		return entities.map((review) => this.reviewsMapper.entityToViewModel(review));
	}

	async getDrinkReview(reviewId: number) {
		const entity = await ReviewModel.findByPk(reviewId);
		if (entity) {
			return this.reviewsMapper.entityToViewModel(entity);
		}
	}

	async createDrinkReview(drinkId: number, viewModel: ReviewsViewModel) {
		viewModel.drinkId = drinkId;
		const entity = await ReviewModel.create(this.reviewsMapper.viewModelCreateToEntity(viewModel));
		if (entity) {
			return this.reviewsMapper.entityToViewModel(entity);
		}
	}

	async updateDrinkReview(viewModel: ReviewsViewModel) {
		return ReviewModel.update(this.reviewsMapper.viewModelToEntity(viewModel), {
			where: {
				id: viewModel.id,
			},
		});
	}

	async deleteDrinkReview(id: number) {
		return ReviewModel.destroy({
			where: {
				id,
			},
		});
	}

	async getDrinkPictures(drinkId: number) {
		const response = await PictureModel.findAll({
			where: {
				drink_id: drinkId,
			},
		});
		return response.map((review) => this.picturesMapper.entityToViewModel(review));
	}

	async createDrinkPicture(drinkId: number, viewModel: PicturesViewModel) {
		viewModel.drinkId = drinkId;
		const entity = await PictureModel.create(this.picturesMapper.viewModelCreateToEntity(viewModel));
		if (entity) {
			return this.picturesMapper.entityToViewModel(entity);
		}
	}

	async deleteDrinkPicture(id: number) {
		return PictureModel.destroy({
			where: {
				id,
			},
		});
	}
}
