import {herokuPath} from "../webService/heroku";

export const userOptions = (body={},id="") => {
    return({
        createUser: {
            method: 'POST',
            url: herokuPath + `usuarios/crear`,
            headers: {'Content-Type': 'application/json'},
            data: {id: body.id, userName: body.userName, photo:body.photo, email: body.email}
        },
        updateUser:{
            method:"PUT",
            url:herokuPath + `usuario/actualizar`,
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
            url:herokuPath + `usuario/id=${id}`,
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