import {pageReducer} from "./pageReducers";
import {userReducer} from "./userReducer";
import {questionReducer} from "./questionReducers";
import {answerListReducer} from "./answerListReducer";
import {answersOfAnswersReducer} from "./answersOfanswersReducer";
import {questionListReducer} from "./questionListReducers";
import {combineReducers} from "redux";
import {dataTransferReducer} from "../reducers/dataTransferReducer";

export const rootReducer = () =>{
    return combineReducers(
        {
            page: pageReducer,
            user: userReducer,
            question: questionReducer,
            questionList: questionListReducer,
            answerList: answerListReducer,
            answersOfAnswers:answersOfAnswersReducer,
            dataTransfer: dataTransferReducer
        }
    );
}