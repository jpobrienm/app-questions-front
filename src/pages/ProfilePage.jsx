import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { updateUser } from "../payloads/userPayloads";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {questionListLoading} from "../newActions/questionListActions";
import {userLoggedAction} from "../newActions/userActions";

export const ProfilePage = () => {

    const [updating, setUpdating] = useState(true);
    const {register, handleSubmit} = useForm();
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        data.id = user.id;
        data.email = user.email;
        data.photo = user.photo;
        dispatch(updateUser(data));
        dispatch(questionListLoading())
        dispatch(userLoggedAction(data))
        navigate("/")
    }

    return(
        <div className="question-excerpt">
            {updating && <form onSubmit={handleSubmit(onSubmit)}>
                <input name="userName" placeholder="Nombre de usuario" type="text" defaultValue={user.userName} {...register("userName")}/>
                <input name="firstNames" placeholder="Nombres" type="text" defaultValue={user.firstNames} {...register("firstNames")}/>
                <input name="lastNames" placeholder="Apellidos" type="text" defaultValue={user.lastNames} {...register("lastNames")}/>
                <input type="text" defaultValue={user.email} disabled={true}/>
                <button className="button" type="submit" >Actualizar datos</button>
            </form>}
        </div>
    )
}