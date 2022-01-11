export const questionOptions = (id="", data={}) => {
    return(
        {
            create:{
                method: 'POST',
                url: `http://localhost:8080/preguntas/crear`,
                headers: {'Content-Type': 'application/json'},
                data:data
            },
            getById:{
                method: 'GET',
                url: `http://localhost:8080/preguntas/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            delete:{
                method:'DELETE',
                url: `http://localhost:8080/preguntas/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
        }
    )
}