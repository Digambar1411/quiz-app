import { useState } from "react";
import "./SingleQuestion.css";

const SingleQuestion=({categoryQuestions,curqueIndex, selectOptionHandler})=>{

    const [isActive, setIsActive] = useState(false);

    const styleSelector=(()=>setIsActive(!isActive));

    return(
        <>
            <div className="question-section flex-col">
                <div className="question"> 
                    {categoryQuestions[curqueIndex].questionText} 
                </div>
                {
                    categoryQuestions[curqueIndex].options.map((option)=>{ const {id,text,isCorrect}=option;
                        return (<ul className="options flex-col"><li className={ isActive ? "active-option" :"" }  key={id} 
                        onClick={()=>selectOptionHandler(option)}>{text}</li></ul>)
                            
                    })
                }
            </div>
        </>
    )
}

export { SingleQuestion }