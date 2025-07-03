import { Sequelize } from "@sequelize/core";
import { SqliteDialect } from "@sequelize/sqlite3";
import { DrinkModel } from "@/db/models/DrinkModel";
import { PictureModel } from "@/db/models/PictureModel";
import { ReviewModel } from "@/db/models/ReviewModel";

export const sequelize = new Sequelize({
	dialect: SqliteDialect,
	storage: "src/db/data.db",
	logging: false,
	models: [DrinkModel, PictureModel, ReviewModel],
	sync: {
		alter: true,
	},
});
