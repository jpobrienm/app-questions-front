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