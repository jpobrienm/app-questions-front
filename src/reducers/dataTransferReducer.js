import {dataTransferInitialState as initialState} from "../initialStates/dataTransferInitialState";
import {dataTransferActionTypes as types} from "../actionTypes/dataTransferActionTypes";

export const dataTransferReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case(types.USER_CREATED):
            return({
                ...state,
                userData:payload
            })
        case(types.QUESTION_DELETED):
            return({
                ...state,
                questionData: null
            })
        case(types.ANSWER_CREATED):
            return({
                ...state,
                answerData: payload
            }
        )
        case(types.USER_UPDATED):
            return({
                ...state,
                userData: payload
            })
        case(types.USER_READ):
            return({
                ...state,
                userData: payload
            })
        default:
            return state;
    }
}