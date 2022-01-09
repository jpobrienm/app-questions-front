
export const questionOptions = (id="", data={}) => {
    return(
        {
            getById:{
                method: 'GET',
                url: `http://localhost:8080/preguntas/${id}`,
                headers: {'Content-Type': 'application/json'}
                },

            create:{
                method: 'POST',
                url: `http://localhost:8080/preguntas/crear`,
                headers: {'Content-Type': 'application/json'},
                data:data
            }
        }
    )
}