import {userQuestionsLoading, userQuestionsLoadSuccess, userQuestionsLoadError} from "../newActions/userQuestionsActions";
import {userQuestionsOptions} from "../newOptions/userQuestionsOptions";
import axios from "axios";


export const loadUserQuestions = (id) => (dispatch) => {

    dispatch(userQuestionsLoading())

    const option = userQuestionsOptions(id).getAllbyUserId;

    axios.request(option).then(function(response) {
        dispatch(userQuestionsLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(userQuestionsLoadError(error.message))
    });
}