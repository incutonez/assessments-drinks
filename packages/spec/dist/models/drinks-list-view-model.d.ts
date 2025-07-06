import type { DrinksViewModel } from './drinks-view-model';
export interface DrinksListViewModel {
    'data': Array<DrinksViewModel>;
    'total'?: number;
}
