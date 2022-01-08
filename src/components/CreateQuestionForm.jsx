import { createQuestion } from "../middlewares/questionPayloads";
import { useState, useEffect } from "react";

export const CreateQuestion = () =>{

    // CAMBIAR POR EL USESELECTOR DE AUTHSTATE (CREAR AUTHSTATE)
    let initialState = {
                    questionBody:null,
                    category: null,
                    type: null
                    }

    const [form, setForm] = useState(initialState)

    const submitForm = (e) => {
        e.preventDefault();
        createQuestion()
    }

    return(
        <form ref={form} onSubmit={submitForm}>
                <label>Añadir nueva pregunta</label>
                <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input>
                <input  required name="userId" hidden type="text" placeholder='Ingresa una pregunta acá'></input>
                <label className=" font-medium">Type</label>
                <select required className="" name="type" defaultValue="Type">
                  <option disabled type="String" value="">Type</option>
                  <option type="String" value="OPEN">OPEN (LONG OPEN BOX)</option>
                        <option type="String" value="OPINION">OPINION (SHORT OPEN BOX)</option>
                        <option type="String" value="WITH RESULT">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option type="String" value="WITH EVIDENCE">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                </select>
                <label className=" font-medium">Category</label>
                <select required name="category"  defaultValue="Category"className="">
                  <option disabled type="String"  value="">Category</option>
                  <option value="TECHNOLOGY_AND_COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option value="SCIENCES">SCIENCES</option>
                        <option value="SOFTWARE_DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option value="SOCIAL_SCIENCES">SOCIAL SCIENCES</option>
                        <option value="LANGUAGE">LANGUAGE</option>
                </select>
                <button className="button" type="submit">Enviar</button>
            </form>
    )


}