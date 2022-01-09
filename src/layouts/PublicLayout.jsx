import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "../components/Navbar";
import {CreateQuestionPage} from "../pages/CreateQuestionPage";
import {LoginPage} from "../pages/LoginPage";
import {QuestionListPage} from "../pages/QuestionListPage";
import {QuestionPage} from "../pages/QuestionPage";


export const PublicLayout = () => {
    return(
        <BrowserRouter>
            <Navbar userId={""}/>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/preguntas" element={<QuestionListPage />} />
                <Route path="/preguntas/:id" element={<QuestionPage />} />
            </Routes>
        </BrowserRouter>
    )
}