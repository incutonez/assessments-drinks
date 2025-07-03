import {
	applyDecorators,
	ArgumentMetadata,
	createParamDecorator,
	Injectable,
	PipeTransform,
	UsePipes,
} from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { GetDrinksRequestViewModel } from "@/viewModels/drinks.request.viewmodel";

export const QueryRaw = createParamDecorator((data, ctx) => ctx.switchToHttp().getRequest().query);

/**
 * This is a little complex.  By default, @Query() query: MyClass works.  However, when the swagger.json is generated,
 * it explodes all the properties to their own param, which can make the generated function quite long and forcing you
 * to specify almost every property.  Instead, we can trick the generated swagger by using ApiQuery and QueryRaw (our
 * own param decorator that returns the raw request's query.  Because if we tried to use @Query("query") the API would
 * expect an object of { query: { limit: 1 } } to be passed in instead of { limit: 1 }, which is the desired input, and
 * there's no way to override @Query("query") with a pipe or anything, so we had to resort to using the raw query.
 */
export function UseQueryObject() {
	return applyDecorators(
		ApiQuery({
			name: "query",
			explode: true,
			type: GetDrinksRequestViewModel,
		}),
		UsePipes(ClassPipe),
	);
}

export function UseValidationPipe() {
	return UsePipes(ClassPipe);
}

@Injectable()
export class ClassPipe implements PipeTransform {
	transform(value: unknown, metadata: ArgumentMetadata) {
		if (metadata.metatype) {
			return plainToInstance(metadata.metatype, value);
		}
		return value;
	}
}
