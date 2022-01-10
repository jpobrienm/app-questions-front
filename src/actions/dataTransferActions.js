import {dataTransferActionTypes as types} from "../actionTypes/dataTransferActionTypes";

export const userCreatedAction = (user) =>{
    return(
        {
        type: types.USER_CREATED,
        payload: user
    })
}

export const questionDeletedAction = () =>{
    return({
        type: types.QUESTION_DELETED,
        payload:null,
    })
}

export const answerCreateAction = (answer) => {
    return({
        type: types.ANSWER_CREATED,
        payload:answer,
    })
}

export const userUpdatedAction = (user) =>{
    return({
        type: types.USER_UPDATED,
        payload: user
    })
}

export const userLoadedAction = (user) =>{
    return({
        type: types.USER_READ,
        payload: user
    })
}