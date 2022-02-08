import { Item } from "../item.model";

export interface cartState{
    quantity:number,
    item:Item|null
}


export const initialState:cartState[]=[]