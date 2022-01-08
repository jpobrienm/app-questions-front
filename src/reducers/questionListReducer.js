import { questionListInitialState as initialState} from "../initialStates/questionListInitialState";
import { questionListActionTypes as types } from "../actionTypes/questionListActionTypes";

export const questionListReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case types.LOADING_QUESTION_LIST:
            return(
                {
                    ...state,
                    loading:true,
                }
            );
        case types.LOAD_QUESTION_LIST_SUCCESS:
            return(
                {
                    ...state,
                    loading:false,
                    questionList:payload
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