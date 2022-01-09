export const dataTransferOptions = (user={},questionId="")  => {
    return(
        {
            createUser: {
                method: 'POST',
                url: `http://localhost:8080/usuarios/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {id: user.id, userName: user.userName, email: user.email}
            },
            deleteQuestion:{
                method:'DELETE',
                url: `http://localhost:8080/preguntas/eliminar/${questionId}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}