import {
    PRODUCT ,ADD_TO_CART,REMOVE_FROM_CART 
} from '../action/types';
const initialState = {
    products: [],
    carts: [],
    
};
const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                carts: (state.carts || []).concat(action.payload)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                carts: state.carts.filter((productId) => productId !== action.payload),
            };
        
        default:
            return state;
    }
}
export default productReducer;