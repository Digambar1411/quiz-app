import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { QuestionProvider} from "./frontend/contexts/questionContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
