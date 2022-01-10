import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {questionDeletedAction} from "../actions/dataTransferActions";
import {deleteQuestion} from "../middlewares/dataTransferPayload";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import {useEffect} from "react";
import {questionListLoading} from "../actions/questionListActions";

export const Question = ({question}) => {

    const state = useSelector(state => state.user.user)
    const loading = useSelector(state => state.question.loading)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleDelete = (id) => () =>{
        dispatch(deleteQuestion(id))
        dispatch(questionListLoading())
        navigate("/mispreguntas")
    }

    useEffect(() => {
    }, [loading])

    return(
        <>
            {state.id === question.userId ? <div>
                    <div>{question.id}</div>
                    <div>{question.userId}</div>
                    <div>{question.questionBody}</div>
                    <div>{question.category}</div>
                    <div>{question.type}</div>
                    <div>{question.score}</div>
                    <div>{question.dateOf}</div>
                    <button className="button" onClick={handleDelete(question.id)}>Eliminar</button>
                </div>:
                <div>
                    <div>{question.id}</div>
                    <div>{question.userId}</div>
                    <div>{question.questionBody}</div>
                    <div>{question.category}</div>
                    <div>{question.type}</div>
                    <div>{question.score}</div>
                    <div>{question.dateOf}</div>
                </div>}
        </>
    )
}