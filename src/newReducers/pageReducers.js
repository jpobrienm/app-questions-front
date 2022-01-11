import {pageActionTypes} from "../newActions/pageActions";


const initialState = {
    loading:false,
    error:null
}

export const pageReducer = (state=initialState, {type, payload}) =>{
    switch (type){
        case pageActionTypes.LOADING_PAGE :
            return({
                ...state,
                loading: payload,
            })
        case pageActionTypes.LOAD_SUCCESS:
            return({
                ...state,
                loading: false,
                error: null
            })
        case pageActionTypes.LOAD_ERROR:
            return({
                ...state,
                loading: false,
                error:payload
            })
        default:
            return state;
    }
}

