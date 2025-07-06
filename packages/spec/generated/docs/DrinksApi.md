# DrinksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDrink**](#createdrink) | **POST** /drinks | |
|[**createDrinkPicture**](#createdrinkpicture) | **POST** /drinks/{drinkId}/pictures | |
|[**createDrinkReview**](#createdrinkreview) | **POST** /drinks/{drinkId}/reviews | |
|[**deleteDrink**](#deletedrink) | **DELETE** /drinks/{drinkId} | |
|[**deleteDrinkPicture**](#deletedrinkpicture) | **DELETE** /drinks/{drinkId}/pictures/{pictureId} | |
|[**deleteDrinkReview**](#deletedrinkreview) | **DELETE** /drinks/{drinkId}/reviews/{reviewId} | |
|[**getDrink**](#getdrink) | **GET** /drinks/{drinkId} | |
|[**getDrinkPictures**](#getdrinkpictures) | **GET** /drinks/{drinkId}/pictures | |
|[**getDrinkReview**](#getdrinkreview) | **GET** /drinks/{drinkId}/reviews/{reviewId} | |
|[**getDrinkReviews**](#getdrinkreviews) | **GET** /drinks/{drinkId}/reviews | |
|[**getDrinks**](#getdrinks) | **GET** /drinks | |
|[**updateDrink**](#updatedrink) | **PUT** /drinks/{drinkId} | |
|[**updateDrinkReview**](#updatedrinkreview) | **PUT** /drinks/{drinkId}/reviews/{reviewId} | |

# **createDrink**
> DrinksViewModel createDrink(drinksViewModel)


### Example

```typescript
import {
    DrinksApi,
    Configuration,
    DrinksViewModel
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinksViewModel: DrinksViewModel; //

const { status, data } = await apiInstance.createDrink(
    drinksViewModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinksViewModel** | **DrinksViewModel**|  | |


### Return type

**DrinksViewModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDrinkPicture**
> PicturesViewModel createDrinkPicture(picturesViewModel)


### Example

```typescript
import {
    DrinksApi,
    Configuration,
    PicturesViewModel
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)
let picturesViewModel: PicturesViewModel; //

const { status, data } = await apiInstance.createDrinkPicture(
    drinkId,
    picturesViewModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **picturesViewModel** | **PicturesViewModel**|  | |
| **drinkId** | [**number**] |  | defaults to undefined|


### Return type

**PicturesViewModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDrinkReview**
> ReviewsViewModel createDrinkReview(reviewsViewModel)


### Example

```typescript
import {
    DrinksApi,
    Configuration,
    ReviewsViewModel
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)
let reviewsViewModel: ReviewsViewModel; //

const { status, data } = await apiInstance.createDrinkReview(
    drinkId,
    reviewsViewModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewsViewModel** | **ReviewsViewModel**|  | |
| **drinkId** | [**number**] |  | defaults to undefined|


### Return type

**ReviewsViewModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDrink**
> deleteDrink()


### Example

```typescript
import {
    DrinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteDrink(
    drinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinkId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDrinkPicture**
> deleteDrinkPicture()


### Example

```typescript
import {
    DrinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)
let pictureId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteDrinkPicture(
    drinkId,
    pictureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinkId** | [**number**] |  | defaults to undefined|
| **pictureId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDrinkReview**
> deleteDrinkReview()


### Example

```typescript
import {
    DrinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)
let reviewId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteDrinkReview(
    drinkId,
    reviewId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinkId** | [**number**] |  | defaults to undefined|
| **reviewId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDrink**
> DrinksViewModel getDrink()


### Example

```typescript
import {
    DrinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)

const { status, data } = await apiInstance.getDrink(
    drinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinkId** | [**number**] |  | defaults to undefined|


### Return type

**DrinksViewModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDrinkPictures**
> Array<PicturesViewModel> getDrinkPictures()


### Example

```typescript
import {
    DrinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)

const { status, data } = await apiInstance.getDrinkPictures(
    drinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinkId** | [**number**] |  | defaults to undefined|


### Return type

**Array<PicturesViewModel>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDrinkReview**
> ReviewsViewModel getDrinkReview()


### Example

```typescript
import {
    DrinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)
let reviewId: number; // (default to undefined)

const { status, data } = await apiInstance.getDrinkReview(
    drinkId,
    reviewId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinkId** | [**number**] |  | defaults to undefined|
| **reviewId** | [**number**] |  | defaults to undefined|


### Return type

**ReviewsViewModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDrinkReviews**
> Array<ReviewsViewModel> getDrinkReviews()


### Example

```typescript
import {
    DrinksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)

const { status, data } = await apiInstance.getDrinkReviews(
    drinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinkId** | [**number**] |  | defaults to undefined|


### Return type

**Array<ReviewsViewModel>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDrinks**
> DrinksListViewModel getDrinks()


### Example

```typescript
import {
    DrinksApi,
    Configuration,
    GetDrinksRequestViewModel
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let query: GetDrinksRequestViewModel; // (default to undefined)

const { status, data } = await apiInstance.getDrinks(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | **GetDrinksRequestViewModel** |  | defaults to undefined|


### Return type

**DrinksListViewModel**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDrink**
> updateDrink(drinksViewModel)


### Example

```typescript
import {
    DrinksApi,
    Configuration,
    DrinksViewModel
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)
let drinksViewModel: DrinksViewModel; //

const { status, data } = await apiInstance.updateDrink(
    drinkId,
    drinksViewModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **drinksViewModel** | **DrinksViewModel**|  | |
| **drinkId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDrinkReview**
> updateDrinkReview(reviewsViewModel)


### Example

```typescript
import {
    DrinksApi,
    Configuration,
    ReviewsViewModel
} from './api';

const configuration = new Configuration();
const apiInstance = new DrinksApi(configuration);

let drinkId: number; // (default to undefined)
let reviewId: number; // (default to undefined)
let reviewsViewModel: ReviewsViewModel; //

const { status, data } = await apiInstance.updateDrinkReview(
    drinkId,
    reviewId,
    reviewsViewModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewsViewModel** | **ReviewsViewModel**|  | |
| **drinkId** | [**number**] |  | defaults to undefined|
| **reviewId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

