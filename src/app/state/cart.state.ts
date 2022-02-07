import { Item } from "../item.model";

export interface cartState{
    count:number,
    item:Item|null
}

export const initialState:cartState[]=[

]