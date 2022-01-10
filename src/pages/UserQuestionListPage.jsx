import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../middlewares/questionListPayload";
import {Question} from "../components/Question";
import {Link} from "react-router-dom";


export const UserQuestionListPage = () =>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const {loading, questionList, error} = useSelector(state => state.questionList);

    useEffect(() =>{
        if(loading){
            dispatch(loadAllQuestionsByUserId(user.id))
        }
    }, [loading])

    return(
        <div>
            {questionList && questionList.map((q) => {
                return (<div className="question-excerpt">
                    <Question key={q.id} question={q}/>
                    <Link to={`/preguntas/${q.id}`} className="button" >
                        View Question
                    </Link>
                </div>)
            })}
        </div>
    )
}