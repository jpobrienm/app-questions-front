import { userActionTypes as types } from "../actionTypes/userActionTypes";

export const userLoggingInAction = () =>{
    return({
            type: types.USER_LOGGING_IN,
            payload : null
        }
    )
}

export const userLoggedAction = ({uid, name, email, photo}) => {
    return({
            type: types.USER_LOGGED,
            payload : {id: uid, userName:name, email:email, photo:photo}
        }
    )
}

export const userLogoutAction =()=>{
    return({
            type : types.USER_LOGOUT,
            payload: null
        }
    )
}