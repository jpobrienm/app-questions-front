
export const questionListActionTypes ={
    LOADING_QUESTION_LIST:"LOADING_QUESTION_LIST",
    LOAD_QUESTION_LIST_SUCCESS:"LOAD_QUESTION_LIST_SUCCESS",
    LOAD_QUESTION_LIST_ERROR:"LOAD_QUESTION_LIST_ERROR"
}

export const questionListLoading = () =>{
    return({
            type: questionListActionTypes.LOADING_QUESTION_LIST,
            payload: true
        }
    );
}

export const questionListLoadSuccess = (questionList) => {
    return ({
            type: questionListActionTypes.LOAD_QUESTION_LIST_SUCCESS,
            payload:questionList,
        }
    );
}

export const questionListLoadError = (error) => {
    return ({
            type: questionListActionTypes.LOAD_QUESTION_LIST_ERROR,
            payload: error,
        }
    );
}