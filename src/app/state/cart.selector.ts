import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Item } from "../item.model";
import { cartState } from "./cart.state";

export const getItem=createFeatureSelector<cartState>('item')
export const getCount=createFeatureSelector<cartState>('count')

export const itemSelector=createSelector(getItem,(state)=>{console.log("Selector",state.item);return state.item})
export const countSelector=createSelector(getCount,(state)=>{return state.count})