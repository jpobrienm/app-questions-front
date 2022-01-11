import { questionOptions as options } from "../services/questionOptions";
import { questionLoading, questionLoadSuccess, questionLoadError } from "../actions/questionActions";
import axios from "axios";
import {questionDeletedAction} from "../actions/dataTransferActions";

export const loadQuestionById = (id) => (dispatch) => {

    dispatch(questionLoading());

    const option = options(id, {}).getById;

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(questionLoadError(error.message))
    });
}

export const createQuestion = (data) => (dispatch) =>{
    
    const option = options("", data).create;

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(response.data))
    }).catch(function(error){
        console.log(error.message);
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