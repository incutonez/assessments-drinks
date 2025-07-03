import { DataTypes, NonAttribute } from "@sequelize/core";
import { Attribute, HasMany, Table } from "@sequelize/core/decorators-legacy";
import { BaseModel } from "@/db/models/BaseModel";
import { PictureModel } from "@/db/models/PictureModel";
import { ReviewModel } from "@/db/models/ReviewModel";
import { ModelInterface } from "@/types";

export type IDrinkModel = ModelInterface<DrinkModel>;
export type IDrinkModelCreate = Omit<IDrinkModel, "id">;

@Table({
	tableName: "drinks",
})
export class DrinkModel extends BaseModel<DrinkModel> {
	@Attribute(DataTypes.STRING)
	declare name: string;

	@Attribute(DataTypes.STRING)
	declare description: string;

	@HasMany(() => ReviewModel, {
		foreignKey: "drink_id",
	})
	declare reviews?: NonAttribute<ReviewModel[]>;

	@HasMany(() => PictureModel, {
		foreignKey: "drink_id",
	})
	declare pictures?: NonAttribute<PictureModel[]>;
}
