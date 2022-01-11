import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {questionListLoading} from "../newActions/questionListActions";
import {answerListLoading} from "../newActions/answerListActions";
import {pageLoadedAction, pageLoadingAction} from "../newActions/pageActions";
import {loadAllQuestions, loadAllQuestionsByUserId} from "../payloads/questionListPayloads";
import {userLogoutAction} from "../newActions/userActions";
import {app} from "../webService/firebase";



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
                titulo:"Perfil",
                url:"/usuario"
            }
        ]

export const PrivateNavbar = () =>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)

    const navigate = useNavigate();

    const handleLogout = () =>{
        app.auth().signOut();
        dispatch(userLogoutAction());
        navigate("/")
    }

    return(
        <nav>
            <section>
                <Link to={"/"} > Preguntas </Link>
                <Link to={"/mispreguntas"} > Mis Preguntas </Link>
                <Link to={"/preguntas/crear"} > Crear Preguntas </Link>
                <Link to={"/usuario"} > Mi Perfil </Link>
                <Link to={"/"} onClick={handleLogout}> Logout </Link>
            </section>
        </nav>
    )
}