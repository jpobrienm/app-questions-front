import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PrivateNavbar} from "../components/PrivateNavbar";
import {CreateQuestionPage} from "../pages/CreateQuestionPage";
import {UserQuestionListPage} from "../pages/UserQuestionListPage";
import {QuestionListPage} from "../pages/QuestionListPage";
import {QuestionPage} from "../pages/QuestionPage";
import {ProfilePage} from "../pages/ProfilePage";
import Footer from "../components/Footer";


export const PrivateLayout = () => {

    return(
        <BrowserRouter>
            <PrivateNavbar />
            <Routes>
                <Route path="/" element={<QuestionListPage />} />
                <Route path="/preguntas/crear" element={<CreateQuestionPage />}/>
                {/* eslint-disable-next-line no-template-curly-in-string */}
                <Route path="/mispreguntas" element={<UserQuestionListPage/>}/>
                <Route path="preguntas/:questionId" element={<QuestionPage />}/>
                <Route path="/usuario" element={<ProfilePage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}