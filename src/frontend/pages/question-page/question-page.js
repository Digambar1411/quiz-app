import { Footer, Navbar} from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../../contexts/index";
import { useState } from "react";
import "./question-page.css";

export function QuestionPage(){
    const [isActive, setIsActive] = useState(false);
   
    const optionHandler=(()=>setIsActive(!isActive));

    const { navigate} = useNavigate();
    const { nextQuestionHandler,curqueIndex,categoryQuestions, seconds, QuitQuiz} = useQuestion();
       
    return (
        <>
            <Navbar />
            
            <div className="question-area flex-col">
                <div className="quiz-title">Quiz Category</div>
                   
                <div className="flex space-btwn">
                    <div>Question : {curqueIndex + 1} / {categoryQuestions.length}</div>
              
                    <div className="flex center timer">
                        <span className="material-symbols-outlined">
                            timelapse
                        </span>
                        <div>00:{seconds<10? "0"+seconds : seconds}</div>
                    </div>
                </div>

                <div className="question-section flex-col">
                    <div className="question"> 
                    {categoryQuestions[curqueIndex].questionText} </div>

                    {
                        categoryQuestions[curqueIndex].options.map(option=>{ const {id,text}=option;
                            return (<ul className="options flex-col"><li className={ isActive ? "active-option" :"" }  key={id} onClick={()=>optionHandler}>{text}</li></ul>)
                        })
                    }

                </div>

                <div className="flex space-btwn">
                    <button className="nav-btn" onClick={QuitQuiz}> Quit </button>

                    <button className="nav-btn" onClick={nextQuestionHandler}> {"Next >"} </button>
                </div>
            </div>

            <Footer />
        </>
    )
   
}