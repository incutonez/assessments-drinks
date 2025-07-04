import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

interface IResponseListEntity<T> {
	data: T[];
	total?: number;
}

export class ApiPaginatedRequest {
	@Type(() => Number)
	offset: number = 0;

	@Type(() => Number)
	limit: number = 25;
}

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export function GetResponseModel<T>(ResourceClass: any) {
	class ResponseListEntity implements IResponseListEntity<T> {
		@ApiProperty({
			type: [ResourceClass],
		})
		declare data: T[];

		total?: number;
	}
	return ResponseListEntity;
}
