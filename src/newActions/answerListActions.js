
export const answerListActions = {
    LOADING_ANSWER_LIST:"LOADING_ANSWER",
    LOAD_ANSWER_LIST_SUCCESS:"LOAD_ANSWER_SUCCESS",
    LOAD_ANSWER_LIST_ERROR:"LOAD_ANSWER_ERROR"
}

export const answerListLoading = () =>{
    return({
            type: answerListActions.LOADING_ANSWER_LIST,
            payload:true
        }
    );
}

export const answerListLoadSuccess = (answerList) => {
    return ({
            type: answerListActions.LOAD_ANSWER_LIST_SUCCESS,
            payload:answerList
        }
    );
}

export const answerListLoadError = (error) => {
    return ({
            type: answerListActions.LOAD_ANSWER_LIST_ERROR,
            payload: error
        }
    );
}