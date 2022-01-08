import { answerInitialState as initialState} from "../initialStates/answerInitialState";
import { answerActionTypes as types } from "../actionTypes/answerActionTypes";

export const answerReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case types.LOADING_ANSWER:
            return(
                {
                    ...state,
                    loading:true,
                }
            );
        case types.LOAD_SUCCESS:
            return(
                {
                    ...state,
                    loading:false,
                    answer:payload
                }
            );
        case types.LOAD_ERROR:
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