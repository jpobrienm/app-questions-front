
export const answersOfAnswersActionTypes = {
    LOADING_ANSWERS_OF_ANSWERS:"LOADING_ANSWERS_OF_ANSWERS",
    LOAD_ANSWERS_OF_ANSWERS_SUCCESS:"LOAD_ANSWERS_OF_ANSWERS_SUCCESS",
    LOAD_ANSWERS_OF_ANSWERS_ERROR:"LOAD_ANSWERS_OF_ANSWERS_SUCCESS"
}

export const answersOfAnswersLoading = () =>{
    return({
        type: answersOfAnswersActionTypes.LOADING_ANSWERS_OF_ANSWERS,
        payload: true
    })
}

export const answersOfAnswersLoaded = (answerList) =>{
    return({
        type: answersOfAnswersActionTypes.LOAD_ANSWERS_OF_ANSWERS_SUCCESS,
        payload: answerList
    })
}

export const answersOfAnswersLoadError = (error) =>{
    return({
        type: answersOfAnswersActionTypes.LOAD_ANSWERS_OF_ANSWERS_ERROR,
        payload:error
    })
}