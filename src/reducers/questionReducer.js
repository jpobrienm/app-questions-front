import { questionInitialState as initialState} from "../initialStates/questionInitialState";
import { questionActionTypes as types } from "../actionTypes/questionActionTypes";

export const questionReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case types.LOADING_QUESTION:
            return(
                {
                    ...state,
                    loading:payload,
                }
            );
        case types.LOAD_QUESTION_SUCCESS:
            return(
                {
                    ...state,
                    loading:false,
                    question:payload
                }
            );
        case types.LOAD_QUESTION_ERROR:
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