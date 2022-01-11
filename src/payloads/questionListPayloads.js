import {questionListOptions} from "../newOptions/questionListOptions";
import {questionListLoading, questionListLoadSuccess, questionListLoadError} from "../newActions/questionListActions";
import axios from "axios";
import {userQuestionsLoadSuccess} from "../newActions/userQuestionsActions";

export const loadAllQuestions = () => (dispatch) => {

    dispatch(questionListLoading())

    const option = questionListOptions().getAll;

    axios.request(option).then(function(response){
        dispatch(questionListLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(questionListLoadError(error.message))
    });
}

export const loadAllQuestionsByUserId = (userId) => (dispatch) => {

    dispatch(questionListLoading())

    const option = questionListOptions(userId).getAllbyUserId;

    axios.request(option).then(function(response){
        dispatch(userQuestionsLoadSuccess(response.data));
    }).catch(function(error){
        dispatch(questionListLoadError(error.message))
    });

}