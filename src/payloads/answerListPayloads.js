import {answerListOptions} from "../newOptions/answerListOptions";
import {answerListLoading, answerListLoadSuccess, answerListLoadError} from "../newActions/answerListActions";
import axios from "axios";


export const loadAllAnswerByParentId = (parentId) => (dispatch) => {

    dispatch(answerListLoading());

    const option = answerListOptions(parentId).getAllByParentId;

    axios.request(option).then(function(response){
        dispatch(answerListLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(answerListLoadError(error.message))
    });
}

export const deleteAnswerById = (parentId, answerId) => (dispatch) => {

    dispatch(answerListLoading())
    const option = answerListOptions(answerId).deleteById

    axios.request(option).then(function(response){
        dispatch(loadAllAnswerByParentId(parentId))
    }).catch(function(error){
        dispatch(answerListLoadError(error.message))
    });
}