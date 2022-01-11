import {answersOfAnswersLoading, answersOfAnswersLoaded, answersOfAnswersLoadError} from "../newActions/answersOfAnswersActions";
import {answersOfAnswersOptions} from "../newOptions/answersOfAnswersOptions";
import axios from "axios";


export const deleteAnswerToAnswerById = (parentId, id) => (dispatch) =>{
    dispatch(answersOfAnswersLoading());

    const option = answersOfAnswersOptions(id).deleteById;

    axios.request(option).then(function(response){
        dispatch(loadAllAnswersToAnswer(parentId))
        dispatch(answersOfAnswersLoaded(response.data))
    }).catch(function(error){
        dispatch(answersOfAnswersLoadError(error.message))
    });

}

export const loadAllAnswersToAnswer = (parentId) => (dispatch) => {

    dispatch(answersOfAnswersLoading());

    const option = answersOfAnswersOptions(parentId).getAllByParentId;

    axios.request(option).then(function(response){
        dispatch(answersOfAnswersLoaded(response.data))
    }).catch(function(error){
        dispatch(answersOfAnswersLoadError(error.message))
    });
}