
export const questionOptions = (id="") => {
    return(
        {
            getByIdOption:{
                method: 'GET',
                url: `http://localhost:8080/preguntas/${id}`,
                headers: {'Content-Type': 'application/json'}
                }
        }
    )
}