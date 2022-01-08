import logo from './logo.svg';
import './App.css';
import { QuestionPage } from './pages/QuestionPage';
import {QuestionListPage} from './pages/QuestionListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateQuestionPage } from './pages/CreateQuestionPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/preguntas" element={<QuestionListPage />} />
          <Route path="/preguntas/:id" element={<QuestionPage />} />
          <Route path="/preguntas/usuario/:userId" element={<QuestionListPage />} />
          <Route path="/preguntas/crear" element={<CreateQuestionPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
