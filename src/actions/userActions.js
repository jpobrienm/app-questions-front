import { userActionTypes as types } from "../actionTypes/userActionTypes";

export const userLoggingInAction = (uid, name, email, photo) =>{
    return({
            type: types.USER_LOGGING_IN,
            payload : {id: uid, userName:name, email:email, photo:photo}
        }
    )
}

export const userLoggedAction = (uid, name, email, photo) => {
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