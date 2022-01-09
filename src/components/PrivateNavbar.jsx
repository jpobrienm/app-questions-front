import {Link} from "react-router-dom";



const privateNavbarOptions =[
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
                url:"/mispreguntas"
            },
            {
                titulo:"Crear Pregunta",
                url:"/preguntas/crear"
            },
            {
                titulo:"logout",
                url:"/logout"
            }]

export const PrivateNavbar = () =>{

    return(
        <nav>
            <section>
                {privateNavbarOptions.map((e,index) =>
                { return (<Link key={index} to={e.url}>{e.titulo}</Link>)})}
            </section>
        </nav>
    )
}