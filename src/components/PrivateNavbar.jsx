import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userLogoutAction} from "../newActions/userActions";
import {app} from "../webService/firebase";
import logo from "../logo.png"


export const PrivateNavbar = () =>{

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () =>{
        app.auth().signOut();
        dispatch(userLogoutAction());
        navigate("/")
    }

    return(
        <nav>
            <section>
                <img className="logo" src={logo} alt="logo"/>
                <Link to={"/"} > Preguntas </Link>
                <Link to={"/mispreguntas"} > Mis Preguntas </Link>
                <Link to={"/preguntas/crear"} > Crear Preguntas </Link>
                <Link to={"/usuario"} > Mi Perfil </Link>
                <Link to={"/"} onClick={handleLogout}> Logout </Link>
            </section>
        </nav>
    )
}