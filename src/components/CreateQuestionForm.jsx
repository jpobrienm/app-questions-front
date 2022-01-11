import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState} from "react";
import TextEditor from "./TextEditor";
import {createQuestion} from "../payloads/questionPayloads";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../payloads/questionListPayloads";

export const CreateQuestion = () =>{

    const user = useSelector(state => state.user.user)

    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [ body, setBody ] = useState("");

    const onSubmit = (data) => {
        data.userId = user.id;
        data.questionBody = body;
        dispatch(createQuestion(data));
        dispatch(loadAllQuestionsByUserId(user.id))
        dispatch(loadAllQuestions())
        navigate("/mispreguntas")
    }



    return(
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>Añadir nueva pregunta</label>
                <TextEditor body={body} setBody={setBody}/>
                <label className=" font-medium">Type</label>
                <select {...register("type")} required className="" name="type" defaultValue="Type" >
                    <option disabled type="String" value="" >Type</option>
                    <option type="String" value="OPEN">OPEN (LONG OPEN BOX)</option>
                    <option type="String" value="OPINION">OPINION (SHORT OPEN BOX)</option>
                    <option type="String" value="WITH_RESULT">WITH RESULT (OPEN BOX WITH LINK)</option>
                    <option type="String" value="WITH_EVIDENCE">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                </select>
                <label className=" font-medium">Category</label>
                <select {...register("category")} required name="category"  defaultValue="Category" className="" >
                    <option disabled type="String"  value="">Category</option>
                    <option value="TECHNOLOGY_AND_COMPUTER">TECHNOLOGY AND COMPUTER</option>
                    <option value="SCIENCES">SCIENCES</option>
                    <option value="SOFTWARE_DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                    <option value="SOCIAL_SCIENCES">SOCIAL SCIENCES</option>
                    <option value="LANGUAGE">LANGUAGE</option>
                </select>
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    )


}