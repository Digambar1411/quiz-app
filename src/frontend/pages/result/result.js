import { useQuestion } from "../../contexts/question-context";
import { Navbar, Footer} from "../../components/index";
import { useNavigate } from "react-router-dom";
import "./result.css";
import { useEffect } from "react";

export function Result(){
    const { score, selectedOption, categoryQuestions} = useQuestion();
    const navigate  = useNavigate();

    const replayHandler =()=>{
        navigate("/");
    }

    useEffect(()=>{console.log(selectedOption)},[])

    return(
        <>
            <Navbar/>
            
            <div className="result-page">
                <strong className="result-title">Quiz Result</strong>
                <section className="score-section">Congratulations you scored : {"0"+score} out of {"0"+categoryQuestions.length}</section>

                <div className="question-container flex-col">
                    {categoryQuestions.map((item)=>{const {questionText, options}=item;
                        return(
                            <div className="single-question"> 
                                <ol type="abc"><li className="question">{questionText}</li></ol>
                                {options.map((option)=>{ const { id, text, isCorrect} = option;
                                    return(
                                       
                                        <div className="single-question-options">
                                            <ul className="final-options flex-col">
                                                <li 
                                                    className={`
                                                    ${isCorrect ? "option correct": "option"} 
                                                    ${selectedOption.id === id & isCorrect ? "option correct":(selectedOption.id === id & !isCorrect ? "option wrong": "option") }
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