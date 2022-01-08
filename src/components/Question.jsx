import { Link } from "react-router-dom";

export const Question = ({question}) => {
    <div>
        <p>{question.category} - <small>{question.type}</small></p>
        <p>{question.questionBody}</p>
    </div>
}