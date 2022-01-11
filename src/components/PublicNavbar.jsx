import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {questionListLoading} from "../actions/questionListActions";


const publicNavbarOptions = [
    {
        titulo:"Home",
        url:"/",
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
                <Link to={"/"}>Home</Link>
            </section>
        </nav>
    )
}