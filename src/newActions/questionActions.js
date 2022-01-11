
export const questionActionTypes = {
    LOADING_QUESTION:"LOADING_QUESTION",
    LOAD_QUESTION_SUCCESS:"LOAD_QUESTION_SUCCESS",
    LOAD_QUESTION_ERROR:"LOAD_QUESTION_ERROR"
}

export const questionLoading = () =>{
    return({
            type: questionActionTypes.LOADING_QUESTION,
            payload:true
        }
    );
}

export const questionLoadSuccess = (question) => {
    return ({
            type: questionActionTypes.LOAD_QUESTION_SUCCESS,
            payload:question,
        }
    );
}

export const questionLoadError = (error) => {
    return ({
            type: questionActionTypes.LOAD_QUESTION_ERROR,
            payload: error,
        }
    );
}