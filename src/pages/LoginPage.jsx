import {userLoggingInAction, userLoggedAction, userLogoutAction} from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {userCreatedAction} from "../actions/dataTransferActions";
import { useNavigate } from "react-router-dom"
import { app, google } from "../webService/firebase";
import {useEffect, useState} from "react";
import {createUser, readUser} from "../middlewares/dataTransferPayload";
import {Modal} from "../components/Modal";

export const LoginPage = () => {

    const state = useSelector(state => state.user.user);
    const userDto = useSelector(state => state.dataTransfer.userData)
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
            .then(user => {
                dispatch(userLoggedAction({uid:user.user.uid,
                    name:user.user.displayName,
                    email:user.user.email,
                    photo:user.user.photoURL}));
                dispatch(createUser({id: user.user.uid,
                    userName: user.user.displayName,
                    photo: user.user.photoURL,
                    email:user.user.email}))
            })
        setOpen(false);
    }

    const logWithEmailHandler = (e) =>{
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
            .then(user =>{
                dispatch(userLoggedAction({uid:user.user.uid,
                    name:user.user.displayName,
                    email:user.user.email,
                    photo:user.user.photoURL}));
                dispatch(readUser(user.user.uid))


            })
            .catch( error => {
            setOpen(true)
            setLoginData({...loginData, error: error.message})
            console.clear()
        })
    }

    const logOutHandler = () =>{
        app.auth().signOut();
        dispatch(userLogoutAction());
        navigate("/");
    }

    const logInHandler = () =>{
        app.auth().signInWithPopup(google)
            .then( user => {
                dispatch(userLoggedAction({uid:user.user.uid,
                    name:user.user.displayName,
                    email:user.user.email,
                    photo:user.user.photoURL}));
                navigate("/preguntas");
                dispatch(readUser(user.user.uid))
                if(userDto ===null){
                    dispatch(createUser({id: user.user.uid,
                        userName: user.user.displayName,
                        photo:user.user.photoURL,
                        email:user.user.email}))
                }
            })
    }

    return(
        <div className="login-form">
            <h1>Bienvenid@ a Sofka Overflow</h1>
            {state?
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