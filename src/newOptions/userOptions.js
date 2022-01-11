
export const userOptions = (body={},id="") => {
    return({
        updateUser:{
            method:"PUT",
            url:`http://localhost:8080/usuario/actualizar`,
            headers: {'Content-Type': 'application/json'},
            data: {id: body.id,
                userName: body.userName,
                firstNames:body.firstNames,
                lastNames: body.lastNames,
                photo:body.photo,
                email: body.email}
        },
        readUser:{
            method:"GET",
            url:`http://localhost:8080/usuario/id=${id}`,
            headers: {'Content-Type': 'application/json'},
            data: {id: body.id,
                userName: body.userName,
                firstNames:body.firstNames,
                lastNames: body.lastNames,
                photo:body.photo,
                email: body.email}
        }
    })
}