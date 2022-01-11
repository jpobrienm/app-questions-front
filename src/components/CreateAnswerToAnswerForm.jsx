import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createAnswer} from "../payloads/answerListPayloads";


export const CreateAnswerToAnswerForm = ({id}) =>{

    const {register, handleSubmit} = useForm();
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();

    const onSubmit = (data) =>{
        data.userId = user.id;
        data.parentId = id;
        dispatch(createAnswer(data))
    }

    return(
        <div className="question-excerpt">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Añadir nueva respuesta</label>
                <input {...register("answerBody")} required name="answerBody" type="text" placeholder='Ingresa tu respuesta' />
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    )

}