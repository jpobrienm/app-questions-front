import { questionOptions as options } from "../services/questionOptions";
import { questionLoading, questionLoadSuccess, questionLoadError } from "../actions/questionActions";
import axios from "axios";

export const loadQuestionById = (id) => (dispatch) => {

    dispatch(questionLoading());

    const option = options(id).getById;

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(questionLoadError(error.message))
    });
}

export const createQuestion = (question) => {
    
    const option = options(question).create;

    axios.request(option).then(function(response){
        console.log(response.data);
    }).catch(function(error){
        console.log(error.message);
    });

}