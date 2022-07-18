import { useQuestion } from "../../contexts/question-context";
import { Navbar, Footer} from "../../components";
import { useNavigate } from "react-router-dom";
import "./result.css";

export function Result(){
    const { score, categoryQuestions} = useQuestion();
    const navigate  = useNavigate();

    const replayHandler =()=>{
        navigate("/");
    }

    return(
        <>
            <Navbar/>
            
            <div className="result-page">
                <strong className="result-title">Quiz Result</strong>
                <section className="score-section">{ score*10> categoryQuestions.length*10/2 ? "Congratulations 🎉, " : "Give it try once 😔, " }you scored {score<1 ? "0"+score : score*10} out of {categoryQuestions.length*10}</section>

                <div className="question-container flex-col">
                    {categoryQuestions.map(({questionText, options, userAnswer,_id})=>{
                        return(
                            <div className="single-question" > 
                                <div className="question" key={questionText} > Q.{_id} : {questionText}</div>
                                {options.map(({ id, text, isCorrect} )=>{ 
                                    return(
                                       
                                        <div className="single-question-options">
                                            <ul className="final-options flex-col">
                                                <li 
                                                    className={`
                                                    ${isCorrect ? "option correct": "option"} 
                                                    ${userAnswer === text & isCorrect ? "option correct":(userAnswer === text & !isCorrect ? "option wrong": "option") }
                                                    `} 
                                                    key={id}>{text}
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        )

                   })}

                </div>

                <section><button className="replay-btn" onClick={replayHandler}>Play again</button></section>
            </div>
            
            <Footer/>
        </>
    )
}