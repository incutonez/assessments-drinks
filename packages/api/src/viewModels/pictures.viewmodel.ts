import { ModelInterface } from "@/types";

export type IPicturesViewModel = ModelInterface<PicturesViewModel>;

export class PicturesViewModel {
	declare name: string;

	declare mimetype: string;

	declare path: string;
}
