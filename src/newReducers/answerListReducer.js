import {answerListActions} from "../newActions/answerListActions";

const initialState = {
    loading: false,
    answerList: null
}

export const answerListReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case answerListActions.LOADING_ANSWER_LIST:
            return({
                ...state,
                loading: payload
            })
        case answerListActions.LOAD_ANSWER_LIST_SUCCESS:
            return({
                ...state,
                loading: false,
                answerList: payload
            })
        case answerListActions.LOAD_ANSWER_LIST_ERROR:
            return ({
                ...state,
                loading:false,
                error: payload
            })
        default:
            return state;

    }
}