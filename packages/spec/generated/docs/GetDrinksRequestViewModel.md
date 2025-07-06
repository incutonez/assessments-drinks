# GetDrinksRequestViewModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**minRating** | **number** |  | [optional] [default to undefined]
**maxRating** | **number** |  | [optional] [default to undefined]
**sort** | [**GetDrinksRequestViewModelSort**](GetDrinksRequestViewModelSort.md) |  | [optional] [default to undefined]
**offset** | **number** |  | [default to 0]
**limit** | **number** |  | [default to 25]

## Example

```typescript
import { GetDrinksRequestViewModel } from './api';

const instance: GetDrinksRequestViewModel = {
    name,
    description,
    minRating,
    maxRating,
    sort,
    offset,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
