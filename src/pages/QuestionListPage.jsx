import { useDispatch, useSelector } from "react-redux";
import { loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";

export const QuestionListPage = () => {

    const {userId} = useParams();

    const dispatch = useDispatch();
    const {loading, questionList, error} = useSelector(state => state.questionList);

    useEffect(() =>{
        if(userId===undefined){
            dispatch(loadAllQuestions());
        }
        else{
            dispatch(loadAllQuestionsByUserId(userId));
        }

    }, [])

    return (
        <div>
            {questionList && questionList.map((q) => {
                return (<Question key={q.id} question={q}/>)
            })}
        </div>
    )
}
