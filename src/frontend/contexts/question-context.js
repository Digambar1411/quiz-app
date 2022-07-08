import { useState, useContext, createContext, useEffect} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const QuestionContext = createContext();
const useQuestion = () => useContext(QuestionContext);

function QuestionProvider({children}){
    const navigate = useNavigate();
    
    const initialTimerValue = 30;
    const initialIndexValue=0
    const initialQuestions = useEffect(()=>{
        getData();
    
    },[])

    const [seconds, setSeconds]= useState(initialTimerValue);
    const [questions, setQuestions] = useState([initialQuestions]);
    const [curqueIndex, setCurqueIndex] = useState(initialIndexValue); 
    const [categoryQuestions, setCategoryQuestions] = useState([]);

    useEffect(()=>{
        const timer=setInterval(()=>{
            setSeconds(seconds-1);
        },1000);

        if(seconds===0){
            nextQuestionHandler();
        }

        return ()=>clearInterval(timer);
    })

    const getData = async ()=>{
        const response =  await axios.get("api/quizzes");
        setQuestions(response.data.quizes);
        console.log(response.data.quizes);
    }

    const getSelectedCategoryQuestions = (name)=>{
        setCurqueIndex(initialIndexValue);  //if curqueIndex is not reseted then for other category, quiz will start from last categories current index question. hence reseting index to 0
        navigate("/rules");
        const getCategoryQuestions = ()=> questions.filter(question=>question.categoryName===name.toLowerCase())
        setCategoryQuestions(getCategoryQuestions());
    }
            
    const nextQuestionHandler = ()=>{
        setSeconds(initialTimerValue);
        if(curqueIndex===categoryQuestions.length-1)
        {
            navigate("/result");
        }
        else{
            setCurqueIndex(curqueIndex+1);
        }
    }

    const QuitQuiz=()=>{
        alert("Your quiz will end and you will be redirected to home page");
        navigate("/")
    }

    return <QuestionContext.Provider value= {{seconds,questions, curqueIndex, nextQuestionHandler, QuitQuiz, getSelectedCategoryQuestions, categoryQuestions}} >{children}
    </QuestionContext.Provider>
}

export{QuestionProvider,useQuestion }