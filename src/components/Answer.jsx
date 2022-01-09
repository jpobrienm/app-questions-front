
export const Answer = ({answer}) => {



    return(
        <div>
            <div>{answer.id}</div>
            <div>{answer.userId}</div>
            <div>{answer.parentId}</div>
            <div>{answer.answerBody}</div>
            <div>{answer.score}</div>
            <div>{answer.votes}</div>
        </div>
    )
}