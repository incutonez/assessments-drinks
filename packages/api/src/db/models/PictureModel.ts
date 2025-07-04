﻿import { DataTypes, NonAttribute } from "@sequelize/core";
import { Attribute, BelongsTo, NotNull, Table } from "@sequelize/core/decorators-legacy";
import { BaseModel } from "@/db/models/BaseModel";
import { DrinkModel } from "@/db/models/DrinkModel";
import { ModelInterface } from "@/types";

export type IPictureModel = ModelInterface<PictureModel>;
export type IPictureModelCreate = Omit<IPictureModel, "id">;

@Table({
	tableName: "pictures",
})
export class PictureModel extends BaseModel<PictureModel> {
	@Attribute(DataTypes.STRING)
	declare name: string;

	@Attribute(DataTypes.STRING)
	declare mimetype: string;

	@Attribute(DataTypes.STRING)
	declare path: string;

	@Attribute(DataTypes.INTEGER)
	@NotNull
	declare drink_id: number;

	@BelongsTo(() => DrinkModel, {
		foreignKey: "drink_id",
	})
	drink?: NonAttribute<DrinkModel>;
}
