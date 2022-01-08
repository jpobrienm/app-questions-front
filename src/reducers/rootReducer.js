import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { answerListReducer } from './answerListReducer';
import { questionListReducer } from './questionListReducer';


export const rootReducer = () =>{
    return combineReducers(
        {
            question: questionReducer,
            questionList: questionListReducer,
            answerList: answerListReducer
        }
    );
}