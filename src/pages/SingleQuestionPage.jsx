import { useDispatch, useSelector } from "react-redux";
import { loadQuestionById } from "../middlewares/questionPayloads";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";


export const SingleQuestionPage = () =>{

    const {id} = useParams();

    const dispatch = useDispatch();
    const {loading, question, error} = useSelector(state => state.question);

    useEffect(() =>{
        dispatch(loadQuestionById(id));
    }, [])

    return(
        <div>
            {question && ( 
            <>
            <div>{question.id}</div>
            <div>{question.userId}</div>
            <div>{question.questionBody}</div>
            <div>{question.category}</div>
            <div>{question.type}</div>
            <div>{question.score}</div>
            <div>{question.dateOf}</div>
            </>)}
        </div>
    )

}
