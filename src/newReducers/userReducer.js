import {userActionTypes} from "../newActions/userActions";

const initialState = {
    loading: false,
    user: null,
    error: null
}

export const userReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case userActionTypes.USER_LOGGING_IN:
            return({
                ...state,
                loading: payload,
            })
        case userActionTypes.USER_LOGGED:
            return({
                ...state,
                loading: false,
                user:payload,
                error:null
            })
        case userActionTypes.USER_LOGOUT:
            return({
                ...state,
                loading: false,
                user:payload,
            })
        case userActionTypes.USER_LOG_ERROR:
            return ({
                ...state,
                error: payload
            })
        default:
            return state;
    }
}