import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Question } from "../components/Question";
import {loadAllAnswerByParentId} from "../payloads/answerListPayloads";
import {LoginPage} from "./LoginPage";
import {loadQuestionById} from "../payloads/questionPayloads";
import {useEffect} from "react";
import {loadAllQuestions} from "../payloads/questionListPayloads";

export const QuestionListPage = () => {

    const dispatch = useDispatch();

    const questionList = useSelector(state => state.questionList.questionList);
    const questionLoading = useSelector(state => state.question.loading)
    const user = useSelector(state => state.user.user)

    const navigate = useNavigate();

    const handleOpenQuestion = (id) => () => {
        // recordarle a cata cambiar la importacion
        dispatch(loadQuestionById(id))
        dispatch(loadAllAnswerByParentId(id))
        navigate(`/preguntas/${id}`)
    }

    useEffect( () =>{
        if(questionLoading){
            dispatch(loadAllQuestions())
        }
    }, [questionLoading])

    return (
        <div>
            {!user  && <LoginPage />}
            <h1>Todas las preguntas</h1>
            {questionList && questionList.map((q) => {
                return (<div className="question-excerpt">
                    <Question key={q.id} question={q}/>
                    <button className="button" onClick={handleOpenQuestion(q.id)} > Ver Pregunta </button>
                    </div>)
            })}
        </div>
    )
}
