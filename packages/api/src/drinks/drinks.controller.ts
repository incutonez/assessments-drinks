import {
	Body,
	Controller, Delete,
	Get, HttpCode, HttpStatus,
	NotFoundException,
	Param,
	Post, Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DrinksService } from "@/drinks/drinks.service";
import { QueryRaw, UseQueryObject, UseValidationPipe } from "@/pipes";
import { GetDrinksRequestViewModel } from "@/viewModels/drinks.request.viewmodel";
import { DrinksListViewModel, DrinksViewModel } from "@/viewModels/drinks.viewmodel";
import { PicturesViewModel } from "@/viewModels/pictures.viewmodel";
import { ReviewsViewModel } from "@/viewModels/reviews.viewmodel";

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

	@Put(":drinkId")
	@UseValidationPipe()
	@HttpCode(HttpStatus.NO_CONTENT)
	async updateDrink(@Param("drinkId") drinkId: number, @Body() viewModel: DrinksViewModel): Promise<void> {
		await this.service.updateDrink(viewModel);
	}

	@Delete(":drinkId")
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteDrink(@Param("drinkId") drinkId: number): Promise<void> {
		await this.service.deleteDrink(drinkId);
	}

	@Post(":drinkId/reviews")
	@UseValidationPipe()
	async createDrinkReview(@Param("drinkId") drinkId: number, @Body() body: ReviewsViewModel): Promise<ReviewsViewModel> {
		const response = await this.service.createDrinkReview(drinkId, body);
		if (response) {
			return response;
		}
		throw new NotFoundException("Review was not created successfully");
	}

	@Get(":drinkId/reviews")
	async getDrinkReviews(@Param("drinkId") drinkId: number): Promise<ReviewsViewModel[]> {
		return this.service.getDrinkReviews(drinkId);
	}

	@Get(":drinkId/reviews/:reviewId")
	async getDrinkReview(@Param("drinkId") drinkId: number, @Param("reviewId") reviewId: number): Promise<ReviewsViewModel> {
		const response = await this.service.getDrinkReview(reviewId);
		if (response) {
			return response;
		}
		throw new NotFoundException("Review not found");
	}

	@Put(":drinkId/reviews/:reviewId")
	@UseValidationPipe()
	@HttpCode(HttpStatus.NO_CONTENT)
	async updateDrinkReview(@Param("drinkId") drinkId: number, @Param("reviewId") reviewId: number, @Body() viewModel: ReviewsViewModel): Promise<void> {
		await this.service.updateDrinkReview(viewModel);
	}

	@Delete(":drinkId/reviews/:reviewId")
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteDrinkReview(@Param("drinkId") drinkId: number, @Param("reviewId") reviewId: number): Promise<void> {
		await this.service.deleteDrinkReview(reviewId);
	}

	@Post(":drinkId/pictures")
	@UseValidationPipe()
	async createDrinkPicture(@Param("drinkId") drinkId: number, @Body() body: PicturesViewModel): Promise<PicturesViewModel> {
		const response = await this.service.createDrinkPicture(drinkId, body);
		if (response) {
			return response;
		}
		throw new NotFoundException("Picture was not created successfully");
	}

	@Get(":drinkId/pictures")
	async getDrinkPictures(@Param("drinkId") drinkId: number): Promise<PicturesViewModel[]> {
		const response = await this.service.getDrinkPictures(drinkId);
		if (response) {
			return response;
		}
		throw new NotFoundException("Picture not found");
	}

	@Delete(":drinkId/pictures/:pictureId")
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteDrinkPicture(@Param("drinkId") drinkId: number, @Param("pictureId") pictureId: number): Promise<void> {
		await this.service.deleteDrinkPicture(pictureId);
	}
}
