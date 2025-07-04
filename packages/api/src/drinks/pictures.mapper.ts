import { Injectable } from "@nestjs/common";
import { IPictureModelCreate, PictureModel } from "@/db/models/PictureModel";
import { IPicturesViewModel, PicturesViewModel } from "@/viewModels/pictures.viewmodel";

@Injectable()
export class PicturesMapper {
	entityToViewModel({ id, name, mimetype, path, drink_id }: PictureModel): IPicturesViewModel {
		return {
			id,
			name,
			mimetype,
			path,
			drinkId: drink_id,
		};
	}

	viewModelCreateToEntity({ drinkId, mimetype, name, path }: PicturesViewModel): IPictureModelCreate {
		return {
			name,
			path,
			mimetype,
			drink_id: drinkId,
		};
	}
}
