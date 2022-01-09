import {dataTransferActionTypes as types} from "../actionTypes/dataTransferActionTypes";

export const userCreatedAction = (user) =>{
    return({
        type: types.USER_CREATED,
        payload: user
    })
}