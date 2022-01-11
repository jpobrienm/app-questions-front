import {pageReducer} from "./pageReducers";
import {userReducer} from "./userReducer";
import {questionReducer} from "./questionReducers";
import {answerListReducer} from "./answerListReducer";
import {answersOfAnswersReducer} from "./answersOfanswersReducer";
import {questionListReducer} from "./questionListReducers";
import {combineReducers} from "redux";
import {userQuestionsReducer} from "./userQuestionsReducer";

export const rootReducer = () =>{
    return combineReducers(
        {
            page: pageReducer,
            user: userReducer,
            question: questionReducer,
            questionList: questionListReducer,
            userQuestions: userQuestionsReducer,
            answerList: answerListReducer,
            answersOfAnswers:answersOfAnswersReducer,
        }
    );
}