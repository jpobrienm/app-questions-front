import {dataTransferInitialState as initialState} from "../initialStates/dataTransferInitialState";
import {dataTransferActionTypes as types} from "../actionTypes/dataTransferActionTypes";

export const dataTransferReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case(types.USER_CREATED):
            return({
                ...state,
                user:payload
            })
        default:
            return state;
    }
}