
export const userQuestionsActionTypes ={
    LOADING_USER_QUESTIONS:"LOADING_USER_QUESTIONS",
    LOAD_USER_QUESTIONS_SUCCESS:"LOAD_USER_QUESTIONS_SUCCESS",
    LOAD_USER_QUESTIONS_ERROR:"LOAD_USER_QUESTIONS_ERROR"
}

export const userQuestionsLoading = () =>{
    return({
            type: userQuestionsActionTypes.LOADING_USER_QUESTIONS,
            payload: true
        }
    );
}

export const userQuestionsLoadSuccess = (questionList) => {
    return ({
            type: userQuestionsActionTypes.LOAD_USER_QUESTIONS_SUCCESS,
            payload:questionList,
        }
    );
}

export const userQuestionsLoadError = (error) => {
    return ({
            type: userQuestionsActionTypes.LOAD_USER_QUESTIONS_ERROR,
            payload: error,
        }
    );
}