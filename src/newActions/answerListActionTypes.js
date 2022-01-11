
export const answerListActionTypes = {
    LOADING_ANSWER_LIST:"LOADING_ANSWER",
    LOAD_ANSWER_LIST_SUCCESS:"LOAD_ANSWER_SUCCESS",
    LOAD_ANSWER_LIST_ERROR:"LOAD_ANSWER_ERROR"
}

export const answerListLoading = () =>{
    return({
            type: answerListActionTypes.LOADING_ANSWER_LIST,
            payload:true
        }
    );
}

export const answerListLoadSuccess = (answerList) => {
    return ({
            type: answerListActionTypes.LOAD_ANSWER_LIST_SUCCESS,
            payload:answerList
        }
    );
}

export const answerListLoadError = (error) => {
    return ({
            type: answerListActionTypes.LOAD_ANSWER_LIST_ERROR,
            payload: error
        }
    );
}