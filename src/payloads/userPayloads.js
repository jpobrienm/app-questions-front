import {userOptions} from "../newOptions/userOptions";
import {userLogError, userLoggedAction, userLoggingAction} from "../newActions/userActions";
import axios from "axios";


export const createUser = (user) => (dispatch) => {

    const option = userOptions(user, "").createUser;

    axios.request(option).then(function(response){
        dispatch(userLoggedAction(response.data))
    }).catch(function(error){
        dispatch(userLogError(error.message))
    });
}

export const updateUser = (user) => (dispatch) =>{

    const option = userOptions(user, "").updateUser;

    axios.request(option).then(function(response){
        dispatch(userLoggedAction(response.data))
    }).catch(function(error){
        dispatch(userLogError(error.message))
    });

}

export const readUser = (id) => (dispatch) =>{

    dispatch(userLoggingAction())

    const option = userOptions({}, id).readUser;

    axios.request(option).then(function(response){
        dispatch(userLoggedAction(response.data))
    }).catch(function(error){
        dispatch(userLogError(error.message))
    });
}