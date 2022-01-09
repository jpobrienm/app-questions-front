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

export const PublicNavbar = () =>{

    return(
        <nav>
            <section>
                {publicNavbarOptions.map((e,index) =>
                { return (<Link key={index} to={e.url}>{e.titulo}</Link>)})}
            </section>
        </nav>
    )
}