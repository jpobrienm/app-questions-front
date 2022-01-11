export const questionListOptions = (userId="") => {
    return(
        {
            getAll:{
                method: 'GET',
                url: `http://localhost:8080/preguntas`,
                headers: {'Content-Type': 'application/json'}
            },

            getAllbyUserId:{
                method: 'GET',
                url: `http://localhost:8080/preguntas/usuario/${userId}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}