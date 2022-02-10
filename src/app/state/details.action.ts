import { createAction, props } from "@ngrx/store"
import { Item } from "../item.model"

export const GET_DETAILS="[details] get details"

export const getDetails=createAction(GET_DETAILS, props<{itemObj:Item}>())