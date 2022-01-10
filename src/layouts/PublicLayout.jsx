import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {QuestionListPage} from "../pages/QuestionListPage";
import {QuestionPage} from "../pages/QuestionPage";
import {PublicNavbar} from "../components/PublicNavbar";


export const PublicLayout = () => {
    return(
        <BrowserRouter>
            <PublicNavbar />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/preguntas" element={<QuestionListPage />} />
                <Route path="preguntas/:questionId" element={<QuestionPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}