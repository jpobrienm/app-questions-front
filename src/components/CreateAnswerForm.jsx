import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState} from "react";
import TextEditor from "./TextEditor";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createAnswer, loadAllAnswerByParentId} from "../payloads/answerListPayloads";


export const CreateAnswerForm = () =>{

    const {register, handleSubmit} = useForm();
    const user = useSelector(state => state.user.user)
    const question = useSelector(state => state.question.question)
    const dispatch = useDispatch();

    const [ body, setBody ] = useState("");

    const onSubmit = (data) =>{
        data.userId = user.id;
        data.answerBody = body;
        data.parentId = question.id;
        dispatch(createAnswer(data))
        dispatch(loadAllAnswerByParentId(question.id))

    }

    return(
        <div className="question-excerpt">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Añadir nueva respuesta</label>
                <TextEditor body={body} setBody={setBody}/>
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    )

}