import {herokuPath} from "../webService/heroku";

export const answerListOptions = (id="", data={}) => {
    return(
        {
            createAnswer:{
                method:'POST',
                url:herokuPath+ `respuestas/crear`,
                headers: {'Content-Type': 'application/json'},
                data: {userId: data.userId, parentId: data.parentId, answerBody: data.answerBody}
            },
            getAllByParentId:{
                method: 'GET',
                url: herokuPath+`respuestas/parentId/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            deleteById:{
                method: 'DELETE',
                url: herokuPath+`respuesta/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
        }
    )
}