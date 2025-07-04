import type { PicturesViewModel } from './pictures-view-model';
import type { ReviewsViewModel } from './reviews-view-model';
export interface DrinksViewModel {
    'id'?: number;
    'name': string;
    'description': string;
    'reviews'?: Array<ReviewsViewModel>;
    'pictures'?: Array<PicturesViewModel>;
}
