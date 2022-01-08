import { combineReducers } from 'redux';
import { questionReducer } from './questionReducer';
import { answerReducer } from './answerReducer';


export const rootReducer = () =>{
    return combineReducers(
        {
            question: questionReducer,
            answer: answerReducer
        }
    );
}