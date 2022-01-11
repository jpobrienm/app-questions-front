import {answerListActionTypes} from "../newActions/answerListActionTypes";

const initialState = {
    loading: false,
    answerList: null
}

export const answerListReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case answerListActionTypes.LOADING_ANSWER_LIST:
            return({
                ...state,
                loading: payload
            })
        case answerListActionTypes.LOAD_ANSWER_LIST_SUCCESS:
            return({
                ...state,
                loading: false,
                answerList: payload
            })
        case answerListActionTypes.LOAD_ANSWER_LIST_ERROR:
            return ({
                ...state,
                loading:false,
                error: payload
            })
        default:
            return state;

    }
}