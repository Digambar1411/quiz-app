import "./App.css";
import {Routes, Route , Navigate} from "react-router-dom";
import { Home, Result, QuestionPage, Rule, Login, Signup} from "./frontend/pages"
import { PrivateRouts } from "./frontend/components/privateRoutes"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={
        <PrivateRouts>
          <QuestionPage />
        </PrivateRouts> } />
      <Route path="/result" element={
        <PrivateRouts>
          <Result />
        </PrivateRouts>} />
      <Route path ="/rules" element={
        <PrivateRouts>
          <Rule />
        </PrivateRouts>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App;
