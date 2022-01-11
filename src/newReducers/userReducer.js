import {userActionTypes} from "../newActions/userActions";

const initialState = {
    loading: false,
    user: null
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
            })
        case userActionTypes.USER_LOGOUT:
            return({
                ...state,
                loading: false,
                user:null,
            })
        default:
            return state;
    }
}