import { useDispatch, useSelector } from "react-redux";
import { loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import { Question } from "../components/Question";
import {loadQuestionById} from "../middlewares/questionPayloads";

export const QuestionListPage = () => {

    const dispatch = useDispatch();
    const {loading, questionList, error} = useSelector(state => state.questionList);

    useEffect(() =>{
        if(loading){
            dispatch(loadAllQuestions())
        }
    }, [loading])

    return (
        <div>
            {questionList && questionList.map((q) => {
                return (<div className="question-excerpt">
                    <Question key={q.id} question={q}/>
                    <Link to={`/preguntas/${q.id}`} className="button" >
                        View Question
                    </Link>
                    </div>)
            })}
        </div>
    )
}
