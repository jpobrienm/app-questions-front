import {userQuestionsActionTypes} from "../newActions/userQuestionsActions";

const initialstate ={
    loading:false,
    userQuestions: null,
    error: null
}

export const userQuestionsReducer = (state=initialstate, {type, payload}) =>{
    switch(type){
        case userQuestionsActionTypes.LOADING_QUESTION_LIST:
            return({
                ...state,
                loading: true
            })
        case userQuestionsActionTypes.LOAD_USER_QUESTIONS_SUCCESS:
            return({
                ...state,
                loading: false,
                userQuestions: payload
            })
        case userQuestionsActionTypes.LOAD_QUESTION_LIST_ERROR:
            return({
                ...state,
                loading: false,
                error: payload
            })
        default:
            return state;
    }
}