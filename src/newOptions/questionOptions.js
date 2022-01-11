import {herokuPath} from "../webService/heroku";

export const questionOptions = (id="", data={}) => {
    return(
        {
            create:{
                method: 'POST',
                url: herokuPath + `preguntas/crear`,
                headers: {'Content-Type': 'application/json'},
                data:data
            },
            getById:{
                method: 'GET',
                url: herokuPath + `preguntas/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            delete:{
                method:'DELETE',
                url: herokuPath + `preguntas/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
        }
    )
}