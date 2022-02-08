import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Item } from "../item.model";
import { cartState } from "./cart.state";

export const getItem=createFeatureSelector<cartState[]>('cartReducer')


export const itemSelector=createSelector(getItem,(state)=>{return state})
