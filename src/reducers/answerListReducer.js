import { answerListInitialState as initialState} from "../initialStates/answerListInitialState";
import { answerListActionTypes as types } from "../actionTypes/answerListActionTypes";

export const answerListReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case types.LOADING_ANSWER_LIST:
            return(
                {
                    ...state,
                    loading:true,
                }
            );
        case types.LOAD_ANSWER_LIST_SUCCESS:
            return(
                {
                    ...state,
                    loading:false,
                    answerList:payload
                }
            );
        case types.LOAD_ANSWER_LIST_ERROR:
            return(
                {
                    ...state,
                    loading:false,
                    error:payload
                }
            )
        default:
            return state;
    }
}