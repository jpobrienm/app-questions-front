import { questionListOptions as options } from "../services/questionListOptions";
import { questionListLoading, questionListLoadSuccess, questionListLoadError } from "../actions/questionListActions";
import axios from "axios";

export const loadAllQuestions = () => (dispatch) => {

    const option = options().getAll;

    axios.request(option).then(function(response){
        dispatch(questionListLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(questionListLoadError(error.message))
    });
}

export const loadAllQuestionsByUserId = (userId) => (dispatch) =>{

    const option = options(userId).getAllbyUserId;

    axios.request(option).then(function(response){
        dispatch(questionListLoadSuccess(response.data));
    }).catch(function(error){
        dispatch(questionListLoadError(error.message))
    });

}