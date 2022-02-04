import { createAction, props } from "@ngrx/store"

export const ADD_TO_CART='[home] add to cart'

export const addToCart=createAction(ADD_TO_CART,props<{item:any,count:number}>())