import { DataTypes } from "@sequelize/core";
import { Attribute, BelongsTo, NotNull, Table } from "@sequelize/core/decorators-legacy";
import { BaseModel } from "@/db/models/BaseModel";
import { DrinkModel } from "@/db/models/DrinkModel";

@Table({
	tableName: "reviews",
})
export class ReviewModel extends BaseModel<ReviewModel> {
	@Attribute(DataTypes.STRING)
	declare user_name: string;

	@Attribute(DataTypes.STRING)
	declare description: string;

	@Attribute(DataTypes.DOUBLE)
	declare rating: number;

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare drink_id: number;

	@BelongsTo(() => DrinkModel, {
		foreignKey: "drink_id",
	})
	declare drink: DrinkModel;
}
