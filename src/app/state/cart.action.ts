import { createAction, props } from "@ngrx/store"
import { cartState } from "./cart.state"

export const ADD_TO_CART='[home] add to cart'
// export const ADD_TO_CART_SUCCESS='[cart] add to cart success'

export const addToCart=createAction(ADD_TO_CART,props<{cartObj:cartState}>())
