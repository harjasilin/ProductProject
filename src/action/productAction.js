import { PRODUCT ,ADD_TO_CART,REMOVE_FROM_CART} from "./types";

export const importProduct = (productId) => {
    return {
        type: PRODUCT,
        payload: productId,
    };
};
export const addToCart = (productId) => {
    return {
        type: ADD_TO_CART,
        payload: productId,
    }
};
export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    }
};