export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = feature =>{
    return{ 
        type: ADD_FEATURE,
        payload: feature
    };
}
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = feature => {
    return{ 
        type: REMOVE_FEATURE,
        payload: feature
    };
}
export const ADD_FEATURE_PRICE = 'ADD_FEATURE_PRICE';
export const addFeaturePrice = total => {
    return{ 
        type: ADD_FEATURE_PRICE,
        payload: total
    };

}
export const REMOVE_FEATURE_PRICE = 'REMOVE_FEATURE_PRICE';
export const removeFeaturePrice = total => {
    return {
        type: REMOVE_FEATURE_PRICE,
        payload: total
    }
}
