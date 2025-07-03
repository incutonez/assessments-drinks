import { Injectable } from "@nestjs/common";
import { Op, Order, WhereOptions } from "@sequelize/core";
import { DrinkModel } from "@/db/models/DrinkModel";
import { DrinksMapper } from "@/drinks/drinks.mapper";
import { GetDrinksRequestViewModel } from "@/viewModels/drinks.request.viewmodel";
import { DrinksListViewModel, DrinksViewModel } from "@/viewModels/drinks.viewmodel";

@Injectable()
export class DrinksService {
	constructor(private mapper: DrinksMapper) {
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
		const entity = await DrinkModel.findByPk(drinkId, {
			include: [{
				association: "pictures",
			}, {
				association: "reviews",
			}],
		});
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
}
