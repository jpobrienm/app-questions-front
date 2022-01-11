
export const userActionTypes = {
    USER_LOGGING_IN:"USER_LOGGING_IN",
    USER_LOGGED:"USER_LOGGED",
    USER_LOGOUT:"USER_LOGOUT",
    USER_LOG_ERROR:"USER_LOG_ERROR"
}

export const userLoggingAction = () =>{
    return({
            type: userActionTypes.USER_LOGGING_IN,
            payload: true
        }
    )
}

export const userLoggedAction = (user) => {
    return({
            type: userActionTypes.USER_LOGGED,
            payload : user,
        }
    )
}

export const userLogoutAction =()=> {
    return ({
            type: userActionTypes.USER_LOGOUT,
            payload: null,
        }
    )
}

export const userLogError = (error) =>{
    return({
        type: userActionTypes.USER_LOG_ERROR,
        payload:error
    })
}