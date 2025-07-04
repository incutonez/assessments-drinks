import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "@sequelize/core";
import { Attribute, AutoIncrement, PrimaryKey } from "@sequelize/core/decorators-legacy";

export class BaseModel<T extends Model> extends Model<InferAttributes<T>, InferCreationAttributes<T>> {
	@Attribute(DataTypes.INTEGER)
	@PrimaryKey
	@AutoIncrement
	declare id: CreationOptional<number>;

	getPlain() {
		return this.get(({
			plain: true,
		}));
	}
}
