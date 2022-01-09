import {Link} from "react-router-dom";

const publicNavbarOptions = [
    {
        titulo:"Home",
        url:"/",
    },
    {
        titulo:"Login",
        url:"/login"
    },
    {
        titulo:"Preguntas",
        url:"/preguntas"
    }
]

const privateNavbarOptions = (userId) => {
        return([
            {
                titulo:"Home",
                url:"/",
            },
            {
                titulo:"Preguntas",
                url:`/preguntas`
            },
            {
                titulo:"Mis Preguntas",
                url:`/preguntas/${userId}`
            },
            {
                titulo:"Crear Pregunta",
                url:`/preguntas/crear`
            },
            {
                titulo:"logout",
                url:"/login"
            }]
        )
    }

export const Navbar = ({userId}) =>{

    return(
        <nav>
            <section>
                {userId!=="" ? privateNavbarOptions(userId).map((e,index) =>{
                    return (<Link key={index} to={e.url}>{e.titulo}</Link>)}):
                publicNavbarOptions.map((e, index) =>{
                    return (<Link key={index} to={e.url}>{e.titulo}</Link>)
                })}
            </section>
        </nav>
    )
}