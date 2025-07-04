import { Module } from "@nestjs/common";
import { DrinksController } from "@/drinks/drinks.controller";
import { DrinksMapper } from "@/drinks/drinks.mapper";
import { DrinksService } from "@/drinks/drinks.service";
import { PicturesMapper } from "@/drinks/pictures.mapper";
import { ReviewsMapper } from "@/drinks/reviews.mapper";

@Module({
	controllers: [DrinksController],
	providers: [DrinksService, DrinksMapper, ReviewsMapper, PicturesMapper],
})
export class DrinksModule {
}
