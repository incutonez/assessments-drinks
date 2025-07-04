import { ModelInterface } from "@/types";

export type IPicturesViewModel = ModelInterface<PicturesViewModel>;

export class PicturesViewModel {
	id?: number;

	declare drinkId: number;

	declare name: string;

	declare mimetype: string;

	declare path: string;
}
