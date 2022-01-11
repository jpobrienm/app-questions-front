
export const answerListOptions = (id="", data={}) => {
    return(
        {
            createAnswer:{
                method:'POST',
                url:`http://localhost:8080/respuestas/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {userId: data.userId, parentId: data.parentId, answerBody: data.answerBody}
            },
            getAllByParentId:{
                method: 'GET',
                url: `http://localhost:8080/respuestas/parentId/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            deleteById:{
                method: 'DELETE',
                url: `http://localhost:8080/respuesta/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
        }
    )
}