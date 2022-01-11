import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {questionDeletedAction} from "../actions/dataTransferActions";
import {deleteQuestion} from "../middlewares/dataTransferPayload";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import {useEffect, useState} from "react";
import {questionListLoading} from "../actions/questionListActions";
import {deleteAnswerById} from "../middlewares/answerListPayload";
import {Modal} from "./Modal";

export const Question = ({question}) => {

    const state = useSelector(state => state.user.user)
    const myQuestion = useSelector(state => state.question)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const msgModal = {
        msg: "¿Desea eliminar esta pregunta?",
        titulo: "Eliminar pregunta",
    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = (id) => () =>{
        dispatch(deleteQuestion(id))
        dispatch(questionListLoading())
        if(myQuestion===null){
            navigate("/mispreguntas")
        }
        setOpen(false);
    }

    const handleDelete = () =>{
        setOpen(true)
    }


    return(
        <div className="question">
            {state && state.id === question.userId ? <div>
                    <div>{question.questionBody}</div>
                    <div>{question.category}</div>
                    <div>{question.type}</div>
                    <div>{question.score}</div>
                    <div>{question.dateOf}</div>
                    <button className="button" onClick={handleDelete}>Eliminar</button>
                    <Modal
                        msgModal={msgModal}
                        open={open}
                        handleClose={handleClose}
                        handleConfirm={handleConfirm(question.id)}
                    />
                </div>:
                <div>
                    <div>{question.questionBody}</div>
                    <div>{question.category}</div>
                    <div>{question.type}</div>
                    <div>{question.score}</div>
                    <div>{question.dateOf}</div>
                </div>}
        </div>
    )
}