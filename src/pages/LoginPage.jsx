import {userLoggedAction, userLogoutAction} from "../newActions/userActions";
import {createUser, readUser} from "../payloads/userPayloads";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom"
import { app, google } from "../webService/firebase";
import {useState} from "react";
import {Modal} from "../components/Modal";
import {loadUserQuestions} from "../payloads/userQuestionsPayloads";
import {loadAllQuestions} from "../payloads/questionListPayloads";

export const LoginPage = () => {

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({email:null, password:null, error:null})

    const msgModal = {
        msg: "El usuario no fue encontrado, ¿desea crearlo?",
        titulo: "Usuario no encontrado",
    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        app.auth().createUserWithEmailAndPassword(loginData.email, loginData.password)
            .then(response => {
                dispatch(createUser({id: response.user.uid,
                    userName: response.user.displayName,
                    photo: response.user.photoURL,
                    email:response.user.email}))
            })
        setOpen(false);
    }

    const logWithEmailHandler = (e) =>{
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
            .catch( error => {
            setOpen(true)
            setLoginData({...loginData, error: error.message
            })
        })
    }

    const logOutHandler = () =>{
        app.auth().signOut();
        dispatch(userLogoutAction());
        navigate("/");
    }

    const logInHandler = () =>{
        app.auth().signInWithPopup(google)
        dispatch(loadAllQuestions())
        navigate("/mispreguntas");
    }

    return(
        <div className="login-form">
            <h1>Bienvenid@ a Sofka Overflow</h1>
            {user?
                <button className="button" onClick={logOutHandler}>
                    log-out
                </button> :
                <>
                    <form onSubmit={logWithEmailHandler}>
                        <input required placeholder="Email" type="email" onChange={(e) => setLoginData({ ...loginData, email:e.target.value})}/>
                        <input required placeholder="Contraseña" type="password" onChange={(e) =>setLoginData({ ...loginData, password:e.target.value})}/>
                        <p className="text-danger">{loginData.error}</p>
                        <button className="button">Inicia sesion con tu correo</button>
                        <div> o </div>
                    </form>
                    <button className="button" type="submit" onClick={logInHandler}>Inicia sesion con Google</button>
                    <Modal
                        msgModal={msgModal}
                        open={open}
                        handleClose={handleClose}
                        handleConfirm={handleConfirm}
                    />
                </>}
        </div>
    );
}