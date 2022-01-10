import { questionListActionTypes as types } from "../actionTypes/questionListActionTypes"


export const questionListLoading = () =>{
    return({
            type: types.LOADING_QUESTION_LIST,
            payload: true
        }
    );
}

export const questionListLoadSuccess = (questionList) => {
    return ({
            type: types.LOAD_QUESTION_LIST_SUCCESS,
            payload:questionList,
        }
    );
}

export const questionListLoadError = (error) => {
    return ({
            type: types.LOAD_QUESTION_LIST_ERROR,
            payload: error,
        }
    );
}