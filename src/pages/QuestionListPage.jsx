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

        console.log(typeof userId)
        if(userId===undefined){
            dispatch(loadAllQuestions());
        }
        else{
            dispatch(() => {
                console.log("entre")
                console.log(userId)
                loadAllQuestionsByUserId(userId)
                console.log(questionList)
            });
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
