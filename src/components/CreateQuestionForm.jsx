import { createQuestion } from "../middlewares/questionPayloads";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {questionListLoading} from "../actions/questionListActions";

export const CreateQuestion = () =>{

    const userData = useSelector(state => state.user.user)

    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        data.userId = userData.id;
        dispatch(createQuestion(data));
        dispatch(questionListLoading())
        navigate("/mispreguntas")
    }



    return(
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>Añadir nueva pregunta</label>
                <input {...register("questionBody")} required name="questionBody" type="text" placeholder='Ingresa una pregunta acá' />
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