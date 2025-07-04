import { Type } from "class-transformer";
import { ISortType } from "@/types";
import { ApiPaginatedRequest } from "@/viewModels/base.list.viewmodel";

export class GetDrinksRequestViewModel extends ApiPaginatedRequest {
	name?: string;

	description?: string;

	@Type(() => Number)
	minRating?: number;

	@Type(() => Number)
	maxRating?: number;

	sort?: {
		field: string;
		// Undefined means DB sort
		direction?: ISortType;
	};
}
