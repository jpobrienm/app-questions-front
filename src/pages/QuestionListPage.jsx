import { useDispatch, useSelector } from "react-redux";
import { loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";

export const QuestionListPage = (type) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const {loading, questionList, error} = useSelector(state => state.questionList);

    useEffect(() =>{
        type.type ==="all"? dispatch(loadAllQuestions()):
                            dispatch(loadAllQuestionsByUserId(user.id))

    }, [questionList])

    return (
        <div>
            {questionList && questionList.map((q) => {
                return (<Question key={q.id} question={q}/>)
            })}
        </div>
    )
}
