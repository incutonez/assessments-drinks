import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { AppInfoViewModel } from '../models';
export declare const AppApiAxiosParamCreator: (configuration?: Configuration) => {
    getInfo: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AppApiFp: (configuration?: Configuration) => {
    getInfo(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppInfoViewModel>>;
};
export declare const AppApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getInfo(options?: RawAxiosRequestConfig): AxiosPromise<AppInfoViewModel>;
};
export interface AppApiInterface {
    getInfo(options?: RawAxiosRequestConfig): AxiosPromise<AppInfoViewModel>;
}
export declare class AppApi extends BaseAPI implements AppApiInterface {
    getInfo(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AppInfoViewModel, any>>;
}
