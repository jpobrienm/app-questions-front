
export const answersOfAnswersOptions = (id="") => {
    return(
        {
            getAllByParentId:{
                method: 'GET',
                url: `http://localhost:8080/respuestas/parentId/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            deleteById:{
                method: 'DELETE',
                url: `http://localhost:8080/respuesta/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}