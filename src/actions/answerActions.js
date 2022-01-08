import { answerActionTypes as types } from "../actionTypes/answerActionTypes";


export const answerLoading = () =>{
    return(
        {
            type: types.LOADING_ANSWER
        }
    );
}

export const answerLoadSuccess = (asnwer) => {
    return (
        {
            type: types.LOAD_SUCCESS,
            payload:question
        }
    );
}

export const answerLoadError = (error) => {
    return (
        {
            type: types.LOAD_ERROR,
            payload: error
        }
    );
}