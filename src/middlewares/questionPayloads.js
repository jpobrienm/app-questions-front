import { questionOptions as options } from "../services/questionOptions";
import { questionLoading, questionLoadSuccess, questionLoadError } from "../actions/questionActions";
import axios from "axios";

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
    console.log(data)
    console.log(option)

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(response.data))
    }).catch(function(error){
        console.log(error.message);
    });

}