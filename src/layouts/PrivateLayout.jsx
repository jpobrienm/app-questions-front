import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "../components/Navbar";
import {CreateQuestionPage} from "../pages/CreateQuestionPage";
import {LoginPage} from "../pages/LoginPage";
import {QuestionListPage} from "../pages/QuestionListPage";
import {QuestionPage} from "../pages/QuestionPage";


export const PrivateLayout = ({state}) => {
    return(
        <BrowserRouter>
            <Navbar userId={state.user.id}/>
            <Routes>
                <Route path="/preguntas/crear" element={<CreateQuestionPage />}/>
                <Route path="/" element={<LoginPage />} />
                <Route path="/preguntas" element={<QuestionListPage />} />
                <Route path="/preguntas/:id" element={<QuestionPage />} />
                <Route path="/preguntas/usuario/:userId" element={<QuestionListPage />}/>
            </Routes>
        </BrowserRouter>
    )
}