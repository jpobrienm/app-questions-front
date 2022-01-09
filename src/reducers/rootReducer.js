import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { answerListReducer } from './answerListReducer';
import { questionListReducer } from './questionListReducer';
import { userReducer } from './userReducer';
import {dataTransferReducer} from "./dataTransferReducer";


export const rootReducer = () =>{
    return combineReducers(
        {
            user: userReducer,
            question: questionReducer,
            questionList: questionListReducer,
            answerList: answerListReducer,
            dataTransfer: dataTransferReducer
        }
    );
}