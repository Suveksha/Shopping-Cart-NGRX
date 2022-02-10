import { createReducer, on } from "@ngrx/store"
import { getDetails } from "./details.action"
import { initialState } from "./details.state"

const _detailsReducer=createReducer(initialState, on(getDetails, (state:any, action:any)=>{
    return {
        ...state
    }
}))

export function detailsReducer(state:any, action:any){
    return _detailsReducer(state,action)
}