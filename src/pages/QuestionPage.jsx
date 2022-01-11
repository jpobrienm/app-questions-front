import { useDispatch, useSelector } from "react-redux";
import {loadQuestionById} from "../payloads/questionPayloads";
import {loadAllAnswerByParentId} from "../payloads/answerListPayloads";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { Answer } from "../components/Answer";
import {CreateAnswerForm} from "../components/CreateAnswerForm";


export const QuestionPage = () =>{

    const {questionId} = useParams();

    const dispatch = useDispatch();

    const loadingPage = useSelector(state => state.page.loading)

    const {loading, question} = useSelector(state => state.question);

    const answerList = useSelector(state => state.answerList.answerList)

    const user = useSelector(state => state.user.user)

    const [answering, setAnswering] = useState(false);

    const toggleAnswer = () =>{
        setAnswering(!answering)
    }

    useEffect(() =>{
        dispatch(loadQuestionById(questionId))
        setAnswering(false)
    }, [answerList])

    return(
        <div>
            {question && <div className="question-excerpt">
                <Question question={question}/>
                {user && <button className="button" onClick={toggleAnswer}>Responder</button>}
                {user && answering ? <CreateAnswerForm /> : <></>}
                {answerList && answerList.map((a) =>
                    <div>
                        <Answer key={a.id} answer={a}/>
                    </div>)}
            </div>}
        </div>
    )

}
