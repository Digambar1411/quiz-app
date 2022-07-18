import "./App.css";
import {Routes, Route } from "react-router-dom";
import { Home, Result, QuestionPage, Rule} from "./frontend/pages"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result" element={<Result />} />
      <Route path ="/rules" element={<Rule />} />
    </Routes>
  )
}

export default App;
