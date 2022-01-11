import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {questionListLoading} from "../actions/questionListActions";
import logo from "../logo.png";


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
                <img className="logo" src={logo} alt="logo"/>
                <Link to={"/"}>Home</Link>
            </section>
        </nav>
    )
}