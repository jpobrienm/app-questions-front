import { useDispatch, useSelector } from "react-redux";
import {loadAllQuestions} from "../payloads/questionListPayloads";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import { Question } from "../components/Question";
import {loadQuestionById} from "../middlewares/questionPayloads";
import {loadAllAnswerToAnswer} from "../middlewares/answerListPayload";
import {loadAllAnswerByParentId} from "../payloads/answerListPayloads";
import {LoginPage} from "./LoginPage";
import {loadAllAnswersToAnswer} from "../payloads/answersOfAnswersPayloads";

export const QuestionListPage = () => {

    const dispatch = useDispatch();

    const questionList = useSelector(state => state.questionList.questionList);
    const user = useSelector(state => state.user.user)
    const answerList = useSelector(state => state.answerList.answerList)

    const navigate = useNavigate();

    const handleOpenQuestion = (id) => () => {
        dispatch(loadQuestionById(id))
        dispatch(loadAllAnswerByParentId(id))
        answerList.map(answer => {
            loadAllAnswerByParentId()
        })
        navigate(`/preguntas/${id}`)
    }

    return (
        <div>
            {!user  && <LoginPage />}
            <h1>Todas las preguntas</h1>
            {questionList && questionList.map((q) => {
                return (<div className="question-excerpt">
                    <Question key={q.id} question={q}/>
                    <button className="button" onClick={handleOpenQuestion(q.id)} > Ver Pregunta </button>
                    </div>)
            })}
        </div>
    )
}
