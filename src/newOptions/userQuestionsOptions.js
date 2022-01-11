import {herokuPath} from "../webService/heroku";

export const userQuestionsOptions = (userId="") => {
    return(
        {
            getAllbyUserId:{
                method: 'GET',
                url: herokuPath+`preguntas/usuario/${userId}`,
                headers: {'Content-Type': 'application/json'}
            }
        }
    )
}