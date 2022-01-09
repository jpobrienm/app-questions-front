import {userLoggingInAction, userLoggedAction, userLogoutAction} from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {userCreatedAction} from "../actions/dataTransferActions";
import { useNavigate } from "react-router-dom"
import { app, google } from "../webService/firebase";
import {useEffect} from "react";

export const LoginPage = () => {

    const state = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandler = () =>{
        app.auth().signOut();
        dispatch(userLogoutAction());
        navigate("/");
    }

    const logInHandler = () =>{
        app.auth().signInWithPopup(google)
            .then( user => {
                dispatch(userLoggingInAction(user.user.uid,
                    user.user.displayName,
                    user.user.email,
                    user.user.photoURL));
                navigate("/preguntas/crear");
                console.log(state)
            }).catch()
    }

    return(
        <div>
            <h1>Home</h1>
            {state.user?
                <button className="button" onClick={logOutHandler}>
                    Log-out
                </button>:
                <button className="button" onClick={logInHandler}>
                    google
                </button>}
        </div>
    );
}