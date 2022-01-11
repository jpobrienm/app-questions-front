
export const userQuestionsOptions = (userId="") => {
    return(
        {
            getAllbyUserId:{
                method: 'GET',
                url: `http://localhost:8080/preguntas/usuario/${userId}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}