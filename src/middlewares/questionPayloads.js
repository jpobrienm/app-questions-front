import { questionOptions as options } from "../services/questionOptions";
import { questionLoading, questionLoadSuccess, questionLoadError } from "../actions/questionActions";
import axios from "axios";

export const loadQuestionById = (id) => (dispatch) => {

    dispatch(questionLoading());

    const option = options(id).getByIdOption;

    axios.request(option).then(function(response){
        dispatch(questionLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(questionLoadError(error.message))
    });
}