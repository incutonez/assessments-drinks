import type { GetDrinksRequestViewModelSort } from './get-drinks-request-view-model-sort';
export interface GetDrinksRequestViewModel {
    'name'?: string;
    'description'?: string;
    'minRating'?: number;
    'maxRating'?: number;
    'sort'?: GetDrinksRequestViewModelSort;
    'offset': number;
    'limit': number;
}
