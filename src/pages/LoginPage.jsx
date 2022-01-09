import {userLoggingInAction, userLoggedAction, userLogoutAction} from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {userCreatedAction} from "../actions/dataTransferActions";
import { useNavigate } from "react-router-dom"
import { app, google } from "../webService/firebase";
import {useEffect} from "react";
import {createUser} from "../middlewares/dataTransferPayload";

export const LoginPage = () => {

    const state = useSelector(state => state.user.user);
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
                dispatch(userLoggedAction(user.user.uid,
                    user.user.displayName,
                    user.user.email,
                    user.user.photoURL));
                navigate("/preguntas");
                dispatch(userCreatedAction({id: user.user.uid,
                    userName: user.user.displayName,
                    email:user.user.email}))
                dispatch(createUser({id: user.user.uid,
                    userName: user.user.displayName,
                    email:user.user.email}))
            }).catch()
    }

    return(
        <div>
            <h1>Home</h1>
            {state?
                <button className="button" onClick={logOutHandler}>
                    Log-out
                </button>:
                <button className="button" onClick={logInHandler}>
                    google
                </button>}
        </div>
    );
}