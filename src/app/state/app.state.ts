import { ActionReducerMap } from "@ngrx/store";
import { Item } from "../item.model";
import { cartReducer } from "./cart.reducer";
import { cartState } from "./cart.state";
import { detailsReducer } from "./details.reducer";

export interface AppState{
    cartState:cartState[],
    detailsState:Item
}

export const reducers:ActionReducerMap<AppState>={
    cartState:cartReducer,
    detailsState:detailsReducer
}