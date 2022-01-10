import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteAnswerById} from "../middlewares/answerListPayload";
import {Modal} from "./Modal";
import {useState} from "react";

export const Answer = ({answer}) => {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();

    const msgModal = {
        msg: "¿Desea eliminar esta respuesta?",
        titulo: "Eliminar Respuesta",
    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () =>{
        dispatch(deleteAnswerById(answer.parentId, answer.id))
        setOpen(false);
    }

    const handleDelete = () =>{
        setOpen(true)
    }

    return(
        <div>
            <div>{answer.id}</div>
            <div>{answer.userId}</div>
            <div>{answer.parentId}</div>
            <div>{answer.answerBody}</div>
            <div>{answer.score}</div>
            <div>{answer.votes}</div>
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