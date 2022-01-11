
export const userActionTypes = {
    USER_LOGGING_IN:"USER_LOGGING_IN",
    USER_LOGGED:"USER_LOGGED",
    USER_LOGOUT:"USER_LOGOUT"
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