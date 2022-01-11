import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {CreateAnswerToAnswerForm} from "./CreateAnswerToAnswerForm";
import {Modal} from "./Modal";
import {deleteAnswerById} from "../payloads/answerListPayloads";
import {loadAllAnswersToAnswer} from "../payloads/answersOfAnswersPayloads";

export const AnswersToAnswer =  ({answerToAnswer}) =>{

    const user = useSelector(state => state.user.user)
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
        dispatch(deleteAnswerById(answerToAnswer.parentId, answerToAnswer.id))
        setOpen(false);
    }

    const handleDelete = () =>{
        dispatch(loadAllAnswersToAnswer(answerToAnswer.id))
        setOpen(true)
    }

    return(
        <div>
            <div>{answerToAnswer.id}</div>
            <div>{answerToAnswer.userId}</div>
            <div>{answerToAnswer.parentId}</div>
            <div>{answerToAnswer.answerBody}</div>
            <div>{answerToAnswer.score}</div>
            <div>{answerToAnswer.votes}</div>
            {user && <button className="button" onClick={toggleAnswer}>Responder</button>}
            {user && answering ? <CreateAnswerToAnswerForm id={answerToAnswer.id} /> : <></>}
            {(user && answerToAnswer.userId === user.id) &&
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