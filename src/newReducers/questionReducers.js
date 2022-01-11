import {questionActionTypes} from "../newActions/questionActions";

const initialState ={
    loading: false,
    question: null
}

export const questionReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case questionActionTypes.LOADING_QUESTION:
            return({
                ...state,
                loading: payload,
            })
        case questionActionTypes.LOAD_QUESTION_SUCCESS:
            return({
                ...state,
                question: payload
            })
        case questionActionTypes.LOAD_QUESTION_ERROR:
            return({
                ...state,
                error:payload
            })
        default:
            return state;
    }
}