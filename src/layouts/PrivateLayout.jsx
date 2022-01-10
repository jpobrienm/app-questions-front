import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PrivateNavbar} from "../components/PrivateNavbar";
import {CreateQuestionPage} from "../pages/CreateQuestionPage";
import {LoginPage} from "../pages/LoginPage";
import {UserQuestionListPage} from "../pages/UserQuestionListPage";
import {QuestionListPage} from "../pages/QuestionListPage";
import {QuestionPage} from "../pages/QuestionPage";
import {useDispatch} from "react-redux";
import {questionListLoading} from "../actions/questionListActions";
import {ProfilePage} from "../pages/ProfilePage";


export const PrivateLayout = () => {

    return(
        <BrowserRouter>
            <PrivateNavbar />
            <Routes>
                <Route path="/preguntas/crear" element={<CreateQuestionPage />}/>
                <Route path="/" element={<LoginPage />} />
                <Route path="/preguntas" element={<QuestionListPage />} />
                {/* eslint-disable-next-line no-template-curly-in-string */}
                <Route path="/mispreguntas" element={<UserQuestionListPage/>}/>
                <Route path="preguntas/:questionId" element={<QuestionPage/>}/>
                <Route path="/usuario" element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}