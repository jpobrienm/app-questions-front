import {dataTransferOptions as options} from "../services/dataTransferOptions";
import {userCreatedAction, questionDeletedAction, answerCreateAction} from "../actions/dataTransferActions";
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

export const createAnswer = (answer) => (dispatch) =>{

    const option = options(answer, "").createAnswer;

    axios.request(option).then(function(response){
        dispatch(answerCreateAction(response.data))
    }).catch(function(error){
        dispatch(error.message)
    });

}