import {answersOfAnswersActionTypes} from "../newActions/answersOfAnswersActions";

const initialState = {
    loading: false,
    answerOfAnswers: null
}

export const answersOfAnswersReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case answersOfAnswersActionTypes.LOADING_ANSWERS_OF_ANSWERS:
            return({
                ...state,
                loading: payload
            })
        case answersOfAnswersActionTypes.LOAD_ANSWERS_OF_ANSWERS_SUCCESS:
            return({
                ...state,
                loading: false,
                answerOfAnswers: payload
            })
        case answersOfAnswersActionTypes.LOAD_ANSWERS_OF_ANSWERS_ERROR:
            return ({
                ...state,
                loading:false,
                error: payload
            })
        default:
            return state;

    }
}