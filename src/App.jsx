import logo from './logo.svg';
import './App.css';
import { SingleQuestionPage } from './pages/SingleQuestionPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/preguntas/:id" element={<SingleQuestionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
