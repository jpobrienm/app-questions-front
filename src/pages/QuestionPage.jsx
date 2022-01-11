import { useDispatch, useSelector } from "react-redux";
import { loadQuestionById } from "../middlewares/questionPayloads";
import { loadAllAnswerByParentId } from "../middlewares/answerListPayload";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { Answer } from "../components/Answer";
import {CreateAnswerForm} from "../components/CreateAnswerForm";


export const QuestionPage = () =>{

    const {questionId} = useParams();

    const dispatch = useDispatch();
    const {loading, question, error} = useSelector(state => state.question);
    const answerData = useSelector(state => state.dataTransfer.answerData)
    const {loadingAnswers, answerList, errorAnswer} = useSelector(state => state.answerList)
    const userState = useSelector(state => state.user)

    const [answering, setAnswering] = useState(false);

    const toggleAnswer = () =>{
        setAnswering(!answering)
    }

    useEffect(() =>{
        dispatch(loadQuestionById(questionId))
        dispatch(loadAllAnswerByParentId(questionId))
        setAnswering(false)
    }, [answerData])

    return(
        <div>
            {question && <div className="question-excerpt">
                <Question question={question}/>
                {userState.user && <button className="button" onClick={toggleAnswer}>Responder</button>}
                {userState.user && answering ? <CreateAnswerForm /> : <></>}
            </div>}
            {answerList && answerList.map((a) =>
                <div className="question-excerpt">
                <Answer key={a.id} answer={a}/>
            </div>)}
        </div>
    )

}
