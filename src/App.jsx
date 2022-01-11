import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector, useStore} from "react-redux";
import {useEffect} from "react";
import {userLoggedAction} from "./newActions/userActions";
import {readUser} from "./payloads/userPayloads";
import {app} from "./webService/firebase";
import {PrivateLayout} from "./layouts/PrivateLayout";
import {PublicLayout} from "./layouts/PublicLayout";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {userCreatedAction} from "./actions/dataTransferActions";
import {loadUserQuestions} from "./payloads/userQuestionsPayloads";
import {loadAllQuestions} from "./payloads/questionListPayloads";



function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(()=>{
    if(user === null){
        app.auth().onAuthStateChanged((user)=>{
                if(user){
                    dispatch(userLoggedAction({uid: user.uid ,
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL}))
                    dispatch(readUser(user.uid))
                    dispatch(loadUserQuestions(user.uid))
                    dispatch(loadAllQuestions())
                }
            }
        )
    }
    },[user])



  return (
    <>
        {user ? <PrivateLayout />:<PublicLayout />}
    </>
  );
}

export default App;
