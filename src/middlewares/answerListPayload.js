import { answerListOptions as options } from "../services/answerListOptions";
import {
    answerListLoading,
    answerListLoadSuccess,
    answerListLoadError,
    answerListDeletingAnswer
} from "../actions/answerListActions";
import axios from "axios";

export const loadAllAnswerByParentId = (parentId) => (dispatch) => {

    dispatch(answerListLoading());

    const option = options(parentId).getAllByParentId;

    axios.request(option).then(function(response){
        dispatch(answerListLoadSuccess(response.data))
    }).catch(function(error){
        dispatch(answerListLoadError(error.message))
    });
}

export const deleteAnswerById = (parentId, answerId) => (dispatch) => {

    dispatch(answerListDeletingAnswer())
    const option = options(answerId).deleteById

    axios.request(option).then(function(response){
        dispatch(loadAllAnswerByParentId(parentId))
    }).catch(function(error){
        dispatch(answerListLoadError(error.message))
    });
}