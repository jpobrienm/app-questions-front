import { questionActionTypes as types } from "../actionTypes/questionActionTypes"


export const questionLoading = () =>{
    return(
        {
            type: types.LOADING_QUESTION
        }
    );
}

export const questionLoadSuccess = (question) => {
    return (
        {
            type: types.LOAD_QUESTION_SUCCESS,
            payload:question
        }
    );
}

export const questionLoadError = (error) => {
    return (
        {
            type: types.LOAD_QUESTION_ERROR,
            payload: error
        }
    );
}