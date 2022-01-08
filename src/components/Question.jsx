import { Link } from "react-router-dom";

export const Question = ({question}) => {
    return(
        <div>
            <div>{question.id}</div>
            <div>{question.userId}</div>
            <div>{question.questionBody}</div>
            <div>{question.category}</div>
            <div>{question.type}</div>
            <div>{question.score}</div>
            <div>{question.dateOf}</div>
        </div>
    )
}