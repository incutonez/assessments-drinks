import globalAxios from 'axios';
import { DUMMY_BASE_URL, assertParamExists, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import { BASE_PATH, BaseAPI, operationServerMap } from '../base';
export const DrinksApiAxiosParamCreator = function (configuration) {
    return {
        createDrink: async (drinksViewModel, options = {}) => {
            assertParamExists('createDrink', 'drinksViewModel', drinksViewModel);
            const localVarPath = `/drinks`;
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(drinksViewModel, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDrink: async (drinkId, options = {}) => {
            assertParamExists('getDrink', 'drinkId', drinkId);
            const localVarPath = `/drinks/{drinkId}`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)));
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        getDrinks: async (query, options = {}) => {
            assertParamExists('getDrinks', 'query', query);
            const localVarPath = `/drinks`;
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (query !== undefined) {
                for (const [key, value] of Object.entries(query)) {
                    localVarQueryParameter[key] = value;
                }
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
export const DrinksApiFp = function (configuration) {
    const localVarAxiosParamCreator = DrinksApiAxiosParamCreator(configuration);
    return {
        async createDrink(drinksViewModel, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDrink(drinksViewModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.createDrink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async getDrink(drinkId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrink(drinkId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.getDrink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async getDrinks(query, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrinks(query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.getDrinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
export const DrinksApiFactory = function (configuration, basePath, axios) {
    const localVarFp = DrinksApiFp(configuration);
    return {
        createDrink(drinksViewModel, options) {
            return localVarFp.createDrink(drinksViewModel, options).then((request) => request(axios, basePath));
        },
        getDrink(drinkId, options) {
            return localVarFp.getDrink(drinkId, options).then((request) => request(axios, basePath));
        },
        getDrinks(query, options) {
            return localVarFp.getDrinks(query, options).then((request) => request(axios, basePath));
        },
    };
};
export class DrinksApi extends BaseAPI {
    createDrink(drinksViewModel, options) {
        return DrinksApiFp(this.configuration).createDrink(drinksViewModel, options).then((request) => request(this.axios, this.basePath));
    }
    getDrink(drinkId, options) {
        return DrinksApiFp(this.configuration).getDrink(drinkId, options).then((request) => request(this.axios, this.basePath));
    }
    getDrinks(query, options) {
        return DrinksApiFp(this.configuration).getDrinks(query, options).then((request) => request(this.axios, this.basePath));
    }
}
