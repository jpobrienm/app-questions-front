import { useDispatch, useSelector } from "react-redux";
import { loadQuestionById } from "../middlewares/questionPayloads";
import { loadAllAnswerByParentId } from "../middlewares/answerListPayload";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { Answer } from "../components/Answer";


export const QuestionPage = () =>{

    const {id} = useParams();

    const dispatch = useDispatch();
    const {loading, question, error} = useSelector(state => state.question);
    const {loadingAnswers, answerList, errorAnswer} = useSelector(state => state.answerList)

    useEffect(() =>{
        dispatch(loadQuestionById(id));
        dispatch(loadAllAnswerByParentId(id));
    }, [])

    return(
        <div>
            {question && <Question question={question}/>}
            {answerList && answerList.map((a) => <Answer key={a.id} answer={a}/>)}
        </div>
    )

}