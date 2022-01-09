import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PrivateNavbar} from "../components/PrivateNavbar";
import {CreateQuestionPage} from "../pages/CreateQuestionPage";
import {LoginPage} from "../pages/LoginPage";
import {QuestionListPage} from "../pages/QuestionListPage";
import {QuestionPage} from "../pages/QuestionPage";


export const PrivateLayout = () => {
    return(
        <BrowserRouter>
            <PrivateNavbar />
            <Routes>
                <Route path="/preguntas/crear" element={<CreateQuestionPage />}/>
                <Route path="/" element={<LoginPage />} />
                <Route path="/preguntas" element={<QuestionListPage type={"all"} />} />
                {/* eslint-disable-next-line no-template-curly-in-string */}
                <Route path="/mispreguntas" element={<QuestionListPage />}/>
            </Routes>
        </BrowserRouter>
    )
}