import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector, useStore} from "react-redux";
import {useEffect} from "react";
import {userLoggedAction} from "./newActions/userActions";
import {createUser, readUser} from "./payloads/userPayloads";
import {app} from "./webService/firebase";
import {PrivateLayout} from "./layouts/PrivateLayout";
import {PublicLayout} from "./layouts/PublicLayout";
import {loadUserQuestions} from "./payloads/userQuestionsPayloads";
import {loadAllQuestions} from "./payloads/questionListPayloads";



function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() =>{

  }, [])

  return (
    <>
        {user ? <PrivateLayout />:<PublicLayout />}
    </>
  );
}

export default App;
