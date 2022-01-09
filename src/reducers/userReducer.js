import { userActionTypes as types} from "../actionTypes/userActionTypes";
import { userIinitialState as initialState} from "../initialStates/userInitialState";

export const userReducer = (state=initialState, {type, payload}) =>{
    switch(type){
        case types.USER_LOGGING_IN:
            return({
                ...state,
            })
        case types.USER_LOGGED:
            return({
                ...state,
                user: payload
            })
        case types.USER_LOGOUT:
            return({
                ...state,
                user: null
            })
        default:
            return state;
    }
}