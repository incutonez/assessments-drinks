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
        createDrinkPicture: async (drinkId, picturesViewModel, options = {}) => {
            assertParamExists('createDrinkPicture', 'drinkId', drinkId);
            assertParamExists('createDrinkPicture', 'picturesViewModel', picturesViewModel);
            const localVarPath = `/drinks/{drinkId}/pictures`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(picturesViewModel, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        createDrinkReview: async (drinkId, reviewsViewModel, options = {}) => {
            assertParamExists('createDrinkReview', 'drinkId', drinkId);
            assertParamExists('createDrinkReview', 'reviewsViewModel', reviewsViewModel);
            const localVarPath = `/drinks/{drinkId}/reviews`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(reviewsViewModel, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        deleteDrink: async (drinkId, options = {}) => {
            assertParamExists('deleteDrink', 'drinkId', drinkId);
            const localVarPath = `/drinks/{drinkId}`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)));
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
        deleteDrinkPicture: async (drinkId, pictureId, options = {}) => {
            assertParamExists('deleteDrinkPicture', 'drinkId', drinkId);
            assertParamExists('deleteDrinkPicture', 'pictureId', pictureId);
            const localVarPath = `/drinks/{drinkId}/pictures/{pictureId}`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)))
                .replace(`{${"pictureId"}}`, encodeURIComponent(String(pictureId)));
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
        deleteDrinkReview: async (drinkId, reviewId, options = {}) => {
            assertParamExists('deleteDrinkReview', 'drinkId', drinkId);
            assertParamExists('deleteDrinkReview', 'reviewId', reviewId);
            const localVarPath = `/drinks/{drinkId}/reviews/{reviewId}`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)))
                .replace(`{${"reviewId"}}`, encodeURIComponent(String(reviewId)));
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
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
        getDrinkPictures: async (drinkId, options = {}) => {
            assertParamExists('getDrinkPictures', 'drinkId', drinkId);
            const localVarPath = `/drinks/{drinkId}/pictures`
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
        getDrinkReview: async (drinkId, reviewId, options = {}) => {
            assertParamExists('getDrinkReview', 'drinkId', drinkId);
            assertParamExists('getDrinkReview', 'reviewId', reviewId);
            const localVarPath = `/drinks/{drinkId}/reviews/{reviewId}`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)))
                .replace(`{${"reviewId"}}`, encodeURIComponent(String(reviewId)));
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
        getDrinkReviews: async (drinkId, options = {}) => {
            assertParamExists('getDrinkReviews', 'drinkId', drinkId);
            const localVarPath = `/drinks/{drinkId}/reviews`
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
        updateDrink: async (drinkId, drinksViewModel, options = {}) => {
            assertParamExists('updateDrink', 'drinkId', drinkId);
            assertParamExists('updateDrink', 'drinksViewModel', drinksViewModel);
            const localVarPath = `/drinks/{drinkId}`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)));
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
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
        updateDrinkReview: async (drinkId, reviewId, reviewsViewModel, options = {}) => {
            assertParamExists('updateDrinkReview', 'drinkId', drinkId);
            assertParamExists('updateDrinkReview', 'reviewId', reviewId);
            assertParamExists('updateDrinkReview', 'reviewsViewModel', reviewsViewModel);
            const localVarPath = `/drinks/{drinkId}/reviews/{reviewId}`
                .replace(`{${"drinkId"}}`, encodeURIComponent(String(drinkId)))
                .replace(`{${"reviewId"}}`, encodeURIComponent(String(reviewId)));
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(reviewsViewModel, localVarRequestOptions, configuration);
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
        async createDrinkPicture(drinkId, picturesViewModel, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDrinkPicture(drinkId, picturesViewModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.createDrinkPicture']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async createDrinkReview(drinkId, reviewsViewModel, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDrinkReview(drinkId, reviewsViewModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.createDrinkReview']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async deleteDrink(drinkId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDrink(drinkId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.deleteDrink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async deleteDrinkPicture(drinkId, pictureId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDrinkPicture(drinkId, pictureId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.deleteDrinkPicture']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async deleteDrinkReview(drinkId, reviewId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDrinkReview(drinkId, reviewId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.deleteDrinkReview']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async getDrink(drinkId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrink(drinkId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.getDrink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async getDrinkPictures(drinkId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrinkPictures(drinkId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.getDrinkPictures']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async getDrinkReview(drinkId, reviewId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrinkReview(drinkId, reviewId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.getDrinkReview']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async getDrinkReviews(drinkId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrinkReviews(drinkId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.getDrinkReviews']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async getDrinks(query, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDrinks(query, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.getDrinks']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async updateDrink(drinkId, drinksViewModel, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDrink(drinkId, drinksViewModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.updateDrink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        async updateDrinkReview(drinkId, reviewId, reviewsViewModel, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateDrinkReview(drinkId, reviewId, reviewsViewModel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DrinksApi.updateDrinkReview']?.[localVarOperationServerIndex]?.url;
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
        createDrinkPicture(drinkId, picturesViewModel, options) {
            return localVarFp.createDrinkPicture(drinkId, picturesViewModel, options).then((request) => request(axios, basePath));
        },
        createDrinkReview(drinkId, reviewsViewModel, options) {
            return localVarFp.createDrinkReview(drinkId, reviewsViewModel, options).then((request) => request(axios, basePath));
        },
        deleteDrink(drinkId, options) {
            return localVarFp.deleteDrink(drinkId, options).then((request) => request(axios, basePath));
        },
        deleteDrinkPicture(drinkId, pictureId, options) {
            return localVarFp.deleteDrinkPicture(drinkId, pictureId, options).then((request) => request(axios, basePath));
        },
        deleteDrinkReview(drinkId, reviewId, options) {
            return localVarFp.deleteDrinkReview(drinkId, reviewId, options).then((request) => request(axios, basePath));
        },
        getDrink(drinkId, options) {
            return localVarFp.getDrink(drinkId, options).then((request) => request(axios, basePath));
        },
        getDrinkPictures(drinkId, options) {
            return localVarFp.getDrinkPictures(drinkId, options).then((request) => request(axios, basePath));
        },
        getDrinkReview(drinkId, reviewId, options) {
            return localVarFp.getDrinkReview(drinkId, reviewId, options).then((request) => request(axios, basePath));
        },
        getDrinkReviews(drinkId, options) {
            return localVarFp.getDrinkReviews(drinkId, options).then((request) => request(axios, basePath));
        },
        getDrinks(query, options) {
            return localVarFp.getDrinks(query, options).then((request) => request(axios, basePath));
        },
        updateDrink(drinkId, drinksViewModel, options) {
            return localVarFp.updateDrink(drinkId, drinksViewModel, options).then((request) => request(axios, basePath));
        },
        updateDrinkReview(drinkId, reviewId, reviewsViewModel, options) {
            return localVarFp.updateDrinkReview(drinkId, reviewId, reviewsViewModel, options).then((request) => request(axios, basePath));
        },
    };
};
export class DrinksApi extends BaseAPI {
    createDrink(drinksViewModel, options) {
        return DrinksApiFp(this.configuration).createDrink(drinksViewModel, options).then((request) => request(this.axios, this.basePath));
    }
    createDrinkPicture(drinkId, picturesViewModel, options) {
        return DrinksApiFp(this.configuration).createDrinkPicture(drinkId, picturesViewModel, options).then((request) => request(this.axios, this.basePath));
    }
    createDrinkReview(drinkId, reviewsViewModel, options) {
        return DrinksApiFp(this.configuration).createDrinkReview(drinkId, reviewsViewModel, options).then((request) => request(this.axios, this.basePath));
    }
    deleteDrink(drinkId, options) {
        return DrinksApiFp(this.configuration).deleteDrink(drinkId, options).then((request) => request(this.axios, this.basePath));
    }
    deleteDrinkPicture(drinkId, pictureId, options) {
        return DrinksApiFp(this.configuration).deleteDrinkPicture(drinkId, pictureId, options).then((request) => request(this.axios, this.basePath));
    }
    deleteDrinkReview(drinkId, reviewId, options) {
        return DrinksApiFp(this.configuration).deleteDrinkReview(drinkId, reviewId, options).then((request) => request(this.axios, this.basePath));
    }
    getDrink(drinkId, options) {
        return DrinksApiFp(this.configuration).getDrink(drinkId, options).then((request) => request(this.axios, this.basePath));
    }
    getDrinkPictures(drinkId, options) {
        return DrinksApiFp(this.configuration).getDrinkPictures(drinkId, options).then((request) => request(this.axios, this.basePath));
    }
    getDrinkReview(drinkId, reviewId, options) {
        return DrinksApiFp(this.configuration).getDrinkReview(drinkId, reviewId, options).then((request) => request(this.axios, this.basePath));
    }
    getDrinkReviews(drinkId, options) {
        return DrinksApiFp(this.configuration).getDrinkReviews(drinkId, options).then((request) => request(this.axios, this.basePath));
    }
    getDrinks(query, options) {
        return DrinksApiFp(this.configuration).getDrinks(query, options).then((request) => request(this.axios, this.basePath));
    }
    updateDrink(drinkId, drinksViewModel, options) {
        return DrinksApiFp(this.configuration).updateDrink(drinkId, drinksViewModel, options).then((request) => request(this.axios, this.basePath));
    }
    updateDrinkReview(drinkId, reviewId, reviewsViewModel, options) {
        return DrinksApiFp(this.configuration).updateDrinkReview(drinkId, reviewId, reviewsViewModel, options).then((request) => request(this.axios, this.basePath));
    }
}
