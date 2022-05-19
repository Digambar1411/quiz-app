import "./App.css";
import {Routes, Route } from "react-router-dom";
import { Home, Result, QuestionPage} from "./frontend/pages/index"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}

export default App;
