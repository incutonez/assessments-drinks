import { Module } from "@nestjs/common";
import { DrinksController } from "@/drinks/drinks.controller";
import { DrinksMapper } from "@/drinks/drinks.mapper";
import { DrinksService } from "@/drinks/drinks.service";

@Module({
	controllers: [DrinksController],
	providers: [DrinksService, DrinksMapper],
})
export class DrinksModule {
}
