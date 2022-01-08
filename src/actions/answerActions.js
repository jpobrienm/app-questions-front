import { answerActionTypes as types } from "../actionTypes/answerActionTypes";


export const answerLoading = () =>{
    return(
        {
            type: types.LOADING_ANSWER
        }
    );
}

export const answerLoadSuccess = (answer) => {
    return (
        {
            type: types.LOAD_ANSWER_SUCCESS,
            payload:answer
        }
    );
}

export const answerLoadError = (error) => {
    return (
        {
            type: types.LOAD_ANSWER_ERROR,
            payload: error
        }
    );
}