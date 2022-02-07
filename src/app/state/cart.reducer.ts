import { createReducer, on } from "@ngrx/store";
import { addToCart, ADD_TO_CART } from "./cart.action";
import { initialState } from "./cart.state";

const _cartReducer=createReducer(initialState,
    on(addToCart, (state: any, action:any)=>[...state,{count:action.cartObj.count+1,item:action.cartObj.item}]))


    export function cartReducer(state:any,action:any)
{
    return _cartReducer(state,action);
}
