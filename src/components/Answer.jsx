import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

    const modules = {
        toolbar: false
    };

    return(
        <div>
            <ReactQuill value={answer.answerBody}
                        modules={modules}
                        readOnly='true'/>
            <div>{answer.score}</div>
            <div>{answer.votes}</div>
            {answerToAnswerList && answerToAnswerList.map( a =>
                <AnswersToAnswer answerToAnswer={a} /> )}
            {(user && false) && <button className="button" onClick={toggleAnswer}>Responder</button>}
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