export const dataTransferOptions = (body={},id="")  => {
    return(
        {
            createUser: {
                method: 'POST',
                url: `http://localhost:8080/usuarios/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {id: body.id, userName: body.userName, email: body.email}
            },
            deleteQuestion:{
                method:'DELETE',
                url: `http://localhost:8080/preguntas/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            createAnswer:{
                method:'POST',
                url:`http://localhost:8080/respuestas/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {userId: body.userId, parentId: body.parentId, answerBody: body.answerBody}
            }
        }
    )
}