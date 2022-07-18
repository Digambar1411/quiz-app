import { Footer, Navbar} from "../../components";
import { useQuestion } from "../../contexts";
import "./question-page.css";

export function QuestionPage(){
    const { nextQuestionHandler, category, categoryQuestions, seconds, error,
        QuitQuiz, curQueIndex, selectOptionHandler, viewResult, selectedOption} = useQuestion();
      
        return (
        <>
            <Navbar />
            
            <div className="question-area flex-col">
                <div className="quiz-title">{ category }</div>
                   
                <div className="controls">
                    <div>Question : 0{curQueIndex + 1} / 0{categoryQuestions.length}</div>
              
                    <div className="flex center timer">
                        <span className="material-symbols-outlined timer-icon">
                            timelapse
                        </span>
                        <div>00:{seconds<10? "0"+seconds : seconds}</div>
                    </div>
                </div>

                <div className="question-section flex-col">
                    <div className="question"> 
                        {categoryQuestions[curQueIndex].questionText} 
                    </div>

                    {error && <p className="error-msg">please select an option</p>}

                    {
                        categoryQuestions[curQueIndex].options.map((option)=>{ const {id,text}=option;
                            return (
                            <div className="options flex-col">
                                <button
                                    className={`option-button ${selectedOption.text===text? "active-option-button" :""}`}  
                                    key={id} 
                                    onClick={()=>{selectOptionHandler(option)}}>{text}
                                </button>
                            </div>)
                        })
                    }
                </div>

                <div className="controls">
                    <button className="control-btn" onClick={QuitQuiz}> Quit </button>
                    <button className="control-btn" onClick={categoryQuestions.length===curQueIndex+1 ? viewResult : nextQuestionHandler}> {categoryQuestions.length===curQueIndex+1 ? "Result": "Next >"} 
                    </button>
                </div>
            </div>

            <Footer />
        </>
    )
   
}