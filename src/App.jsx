import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector, useStore} from "react-redux";
import {useEffect} from "react";
import {userLoggedAction, userLoggingInAction} from "./actions/userActions";
import {app} from "./webService/firebase";
import {PrivateLayout} from "./layouts/PrivateLayout";
import {PublicLayout} from "./layouts/PublicLayout";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {createUser, readUser} from "./middlewares/dataTransferPayload";
import {userCreatedAction} from "./actions/dataTransferActions";


function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.user);

  useEffect(()=>{
    if(state.user === null){
        app.auth().onAuthStateChanged((user)=>{
                if(user){
                    dispatch(userLoggedAction({uid: user.uid ,
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL}))
                    dispatch(readUser(user.uid))
                }
            }
        )
    }
    },[state.user])



  return (
    <>
        {state.user ? <PrivateLayout />:<PublicLayout />}
    </>
  );
}

export default App;
