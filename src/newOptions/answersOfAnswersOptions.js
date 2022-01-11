import {herokuPath} from "../webService/heroku";

export const answersOfAnswersOptions = (id="") => {
    return(
        {
            getAllByParentId:{
                method: 'GET',
                url: herokuPath + `respuestas/parentId/${id}`,
                headers: {'Content-Type': 'application/json'}
            },
            deleteById:{
                method: 'DELETE',
                url: herokuPath+`respuesta/eliminar/${id}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}