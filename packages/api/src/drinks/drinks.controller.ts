import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DrinksService } from "@/drinks/drinks.service";
import { QueryRaw, UseQueryObject, UseValidationPipe } from "@/pipes";
import { GetDrinksRequestViewModel } from "@/viewModels/drinks.request.viewmodel";
import { DrinksListViewModel, DrinksViewModel } from "@/viewModels/drinks.viewmodel";

@ApiTags("drinks")
@Controller("drinks")
export class DrinksController {
	constructor(private readonly service: DrinksService) {
	}

	@Get("")
	@UseQueryObject()
	async getDrinks(@QueryRaw() query: GetDrinksRequestViewModel): Promise<DrinksListViewModel> {
		return this.service.getDrinks(query);
	}

	@Post("")
	@UseValidationPipe()
	async createDrink(@Body() body: DrinksViewModel): Promise<DrinksViewModel> {
		const response = await this.service.createDrink(body);
		if (response) {
			return response;
		}
		throw new NotFoundException("Drink was not created successfully");
	}

	@Get(":drinkId")
	async getDrink(@Param("drinkId") drinkId: number): Promise<DrinksViewModel> {
		const response = await this.service.getDrink(drinkId);
		if (response) {
			return response;
		}
		throw new NotFoundException("Drink not found");
	}
}
