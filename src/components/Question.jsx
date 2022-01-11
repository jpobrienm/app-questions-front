import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Modal} from "./Modal";
import {deleteQuestion, loadQuestionById} from "../payloads/questionPayloads";
import {questionListLoading} from "../newActions/questionListActions";
import {loadUserQuestions} from "../payloads/userQuestionsPayloads";
import {questionLoading} from "../newActions/questionActions";

export const Question = ({question}) => {

    const user = useSelector(state => state.user.user)
    const loadingQuestion = useSelector(state => state.question.loading)
    const loadingQuestionList = useSelector(state => state.userQuestions.loading)
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
        dispatch(questionLoading())
        setOpen(false);
    }

    const handleDelete = () =>{
        setOpen(true)
    }

    const modules = {
        toolbar: false
    };

    useEffect(() =>{
        if(loadingQuestion){
            dispatch(loadUserQuestions(user.id))
        }
    }, [loadingQuestion])

    return(
        <div className="question">
            {(user && user.id === question.userId) &&
                <div>
                    <ReactQuill value={question.questionBody}
                                modules={modules}
                                readOnly='true'/>
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
                </div>}
            {(user && user.id !== question.userId) &&
                <div>
                    <div>{question.questionBody}</div>
                    <div>{question.category}</div>
                    <div>{question.type}</div>
                    <div>{question.score}</div>
                    <div>{question.dateOf}</div>
                </div>}
            {!user &&
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