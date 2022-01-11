import {questionListActionTypes} from "../newActions/questionListActions";

const initialstate ={
    loading:false,
    questionList: null,
    error:null
}

export const questionListReducer = (state=initialstate, {type, payload}) =>{
    switch(type){
        case questionListActionTypes.LOADING_QUESTION_LIST:
            return({
                ...state,
                loading: true
            })
        case questionListActionTypes.LOAD_QUESTION_LIST_SUCCESS:
            return({
                ...state,
                loading: false,
                questionList: payload
            })
        case questionListActionTypes.LOAD_QUESTION_LIST_ERROR:
            return({
                ...state,
                loading: false,
                error: payload
            })
        default:
            return state;
    }
}