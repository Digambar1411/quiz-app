import { useQuestion } from "../../contexts/question-context";
import { Navbar, Footer} from "../../components/index";
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
                <section className="score-section">Congratulations you scored : {score<1 ? "0"+score : score*10} out of {categoryQuestions.length*10}</section>

                <div className="question-container flex-col">
                    {categoryQuestions.map((item)=>{const {questionText, options, userAnswer,_id}=item;
                        return(
                            <div className="single-question" > 
                                <ul><li className="question" key={questionText} > Q.{_id} : {questionText}</li></ul>
                                {options.map((option)=>{ const { id, text, isCorrect} = option;
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