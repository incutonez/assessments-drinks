import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { DrinksListViewModel } from '../models';
import type { DrinksViewModel } from '../models';
import type { GetDrinksRequestViewModel } from '../models';
export declare const DrinksApiAxiosParamCreator: (configuration?: Configuration) => {
    createDrink: (drinksViewModel: DrinksViewModel, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getDrink: (drinkId: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getDrinks: (query: GetDrinksRequestViewModel, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DrinksApiFp: (configuration?: Configuration) => {
    createDrink(drinksViewModel: DrinksViewModel, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DrinksViewModel>>;
    getDrink(drinkId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DrinksViewModel>>;
    getDrinks(query: GetDrinksRequestViewModel, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DrinksListViewModel>>;
};
export declare const DrinksApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    createDrink(drinksViewModel: DrinksViewModel, options?: RawAxiosRequestConfig): AxiosPromise<DrinksViewModel>;
    getDrink(drinkId: number, options?: RawAxiosRequestConfig): AxiosPromise<DrinksViewModel>;
    getDrinks(query: GetDrinksRequestViewModel, options?: RawAxiosRequestConfig): AxiosPromise<DrinksListViewModel>;
};
export interface DrinksApiInterface {
    createDrink(drinksViewModel: DrinksViewModel, options?: RawAxiosRequestConfig): AxiosPromise<DrinksViewModel>;
    getDrink(drinkId: number, options?: RawAxiosRequestConfig): AxiosPromise<DrinksViewModel>;
    getDrinks(query: GetDrinksRequestViewModel, options?: RawAxiosRequestConfig): AxiosPromise<DrinksListViewModel>;
}
export declare class DrinksApi extends BaseAPI implements DrinksApiInterface {
    createDrink(drinksViewModel: DrinksViewModel, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DrinksViewModel, any>>;
    getDrink(drinkId: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DrinksViewModel, any>>;
    getDrinks(query: GetDrinksRequestViewModel, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DrinksListViewModel, any>>;
}
