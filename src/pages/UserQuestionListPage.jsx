import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { loadAllQuestionsByUserId} from "../payloads/questionListPayloads";
import {Question} from "../components/Question";
import {Link, useNavigate} from "react-router-dom";
import {loadQuestionById} from "../middlewares/questionPayloads";


export const UserQuestionListPage = () =>{

    const dispatch = useDispatch();
    const userQuestions = useSelector(state => state.userQuestions.userQuestions);

    const navigate = useNavigate();


    const handleOpenQuestion = (id) => () => {
        dispatch(loadQuestionById(id))
        navigate(`/preguntas/${id}`)
    }

    return(
        <div>
            {userQuestions && userQuestions.map((q) => {
                return (<div className="question-excerpt">
                    <Question key={q.id} question={q}/>
                    <button className="button" onClick={handleOpenQuestion(q.id)} > Ver Pregunta </button>
                </div>)
            })}
        </div>
    )
}