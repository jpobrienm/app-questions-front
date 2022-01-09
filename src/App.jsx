import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector, useStore} from "react-redux";
import {useEffect} from "react";
import {userLoggedAction, userLoggingInAction} from "./actions/userActions";
import {app} from "./webService/firebase";
import {PrivateLayout} from "./layouts/PrivateLayout";
import {PublicLayout} from "./layouts/PublicLayout";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.user);

  useEffect(()=>{
    app.auth().onAuthStateChanged((user)=>{
          if(user){
            dispatch(userLoggedAction(user.uid ,
                user.displayName,
                user.email,
                user.photoURL))
          }
        }
    )
    },[])



  return (
    <>
        {state.user ? <PrivateLayout/>:<PublicLayout />}
    </>
  );
}

export default App;
