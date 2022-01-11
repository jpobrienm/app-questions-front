import {herokuPath} from "../webService/heroku";

export const questionListOptions = (userId="") => {
    return(
        {
            getAll:{
                method: 'GET',
                url: herokuPath+`preguntas`,
                headers: {'Content-Type': 'application/json'}
            },

            getAllbyUserId:{
                method: 'GET',
                url: herokuPath+`preguntas/usuario/${userId}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}