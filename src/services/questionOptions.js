
export const questionOptions = (id="") => {
    return(
        {
            getByIdOption:{
                method: 'GET',
                url: `http://localhost:8080/preguntas/id=${id}`,
                headers: {'Content-Type': 'application/json'}
                }
        }
    )
}