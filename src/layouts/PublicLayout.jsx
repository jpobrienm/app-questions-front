import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {QuestionListPage} from "../pages/QuestionListPage";
import {QuestionPage} from "../pages/QuestionPage";
import {PublicNavbar} from "../components/PublicNavbar";
import Footer from "../components/Footer";


export const PublicLayout = () => {
    return(
        <BrowserRouter>
            <PublicNavbar />
            <Routes>
                <Route path="/" element={<QuestionListPage />} />
                <Route path="preguntas/:questionId" element={<QuestionPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}