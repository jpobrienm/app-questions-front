export const dataTransferOptions = (user={})  => {
    return(
        {
            createUser:{
                method: 'POST',
                url: `http://localhost:8080/usuarios/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {id: user.id, userName:user.userName, email:user.email}
            }
        }
    )
}