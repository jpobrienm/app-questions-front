import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userLoggedAction, userLoggingInAction} from "./actions/userActions";
import {app} from "./webService/firebase";
import {PrivateLayout} from "./layouts/PrivateLayout";
import {PublicLayout} from "./layouts/PublicLayout";


function App() {

  const dispatch = useDispatch()
  const userState = useSelector(state => state.user);


  useEffect(()=>{
    app.auth().onAuthStateChanged((user)=>{
      if(user){
        dispatch(userLoggedAction(user.uid ,
            user.displayName,
            user.email,
            user.photoURL))
      }
    })},[])



  return (
    <>
        {userState.user ? <PrivateLayout state={userState}/>:<PublicLayout />}
    </>
  );
}

export default App;
