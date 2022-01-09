import {dataTransferOptions as options} from "../services/dataTransferOptions";
import {userCreatedAction, questionDeletedAction} from "../actions/dataTransferActions";
import axios from "axios";
import {questionLoadError, questionLoadSuccess} from "../actions/questionActions";


export const createUser = (user) => (dispatch) => {

    const option = options(user, "").createUser;

    axios.request(option).then(function(response){
        dispatch(userCreatedAction(response.data))
    }).catch(function(error){
        dispatch(error.message)
    });
}

export const deleteQuestion = (questionId) => (dispatch) =>{

    const option = options("", questionId).deleteQuestion;

    axios.request(option).then(function(response){
        dispatch(questionDeletedAction())
    }).catch(function(error){
        dispatch(error.message)
    });

}