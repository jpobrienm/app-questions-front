import {useDispatch, useSelector} from "react-redux";
import {Modal} from "./Modal";
import {useEffect, useState} from "react";
import {CreateAnswerToAnswerForm} from "./CreateAnswerToAnswerForm";
import {deleteAnswerById} from "../payloads/answerListPayloads";
import {loadAllAnswersToAnswer} from "../payloads/answersOfAnswersPayloads";
import {AnswersToAnswer} from "./AnswersToAnswer";

export const Answer = ({answer}) => {

    const user = useSelector(state => state.user.user)
    const answerToAnswerList = useSelector(state => state.answersOfAnswers.answerOfAnswers)
    const dispatch = useDispatch();

    const msgModal = {
        msg: "¿Desea eliminar esta respuesta?",
        titulo: "Eliminar respuesta",
    };

    const [open, setOpen] = useState(false);

    const [answering, setAnswering] = useState(false);

    const toggleAnswer = () =>{
        setAnswering(!answering)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () =>{
        dispatch(deleteAnswerById(answer.parentId, answer.id))
        setOpen(false);
    }

    const handleDelete = () =>{
        dispatch(loadAllAnswersToAnswer(answer.parentId, answer.id))
        setOpen(true)
    }

    return(
        <div>
            <div>{answer.answerBody}</div>
            <div>{answer.score}</div>
            <div>{answer.votes}</div>
            {answerToAnswerList && answerToAnswerList.map( a =>
                <AnswersToAnswer answerToAnswer={a} /> )}
            {user && <button className="button" onClick={toggleAnswer}>Responder</button>}
            {user && answering ? <CreateAnswerToAnswerForm id={answer.id} /> : <></>}
            {(user && answer.userId === user.id) &&
                <>
                    <button className="button" onClick={handleDelete}>Eliminar</button>
                    <Modal
                        msgModal={msgModal}
                        open={open}
                        handleClose={handleClose}
                        handleConfirm={handleConfirm}
                    />
                </>}
        </div>
    )
}