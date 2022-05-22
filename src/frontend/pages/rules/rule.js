import "./rule.css";
import { Footer, Navbar } from "../../components/index";
import { useNavigate } from "react-router-dom";


export function Rule(){

    const navigate = useNavigate();
 
    return(
        <>
            <Navbar />

            <div className="rule-page">
                <h2 className="rule-heading">Rules to Solve Quiz</h2>
                <ol className="rules">
                    <li>Select only 1 answer amongs the given options.</li>
                    <li>You will get 1 point for each correct answer.</li>
                    <li>Click next to view the next question.</li>
                    <li>There are total 3 questions.</li>
                    <li>After completion of all questions you will see final score</li>
                </ol>
                <button onClick= {()=>navigate("/question")} className="play-btn">Start Quiz</button>
            </div>

            <Footer />
        </>
    )
}