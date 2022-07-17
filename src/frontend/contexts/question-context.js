import { useState, useContext, createContext, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QuestionContext = createContext();
const useQuestion = () => useContext(QuestionContext);

function QuestionProvider({children}){
    const navigate = useNavigate();
        
    const initialTimerValue = 30;
    const initialIndexValue=0;
    const initialScore=0;
    const initialQuestions = useEffect(()=>{getData()},[]);

    const [seconds, setSeconds]= useState(initialTimerValue);
    const [score, setScore] = useState(initialScore);
    const [selectedOption, setSelectedOption]= useState([]);
    const [category, setCategory]= useState("");
    const [error , setError]= useState(false);

    const [questions, setQuestions] = useState([initialQuestions]);
    const [curqueIndex, setCurqueIndex] = useState(initialIndexValue); 
    const [categoryQuestions, setCategoryQuestions] = useState([]);

    useEffect(()=>{
        const timer=setInterval(()=>{
            setSeconds(seconds-1);
        },1000);
        if(seconds===0){
            setSeconds(initialTimerValue);
            setCurqueIndex(curqueIndex+1);
        }
        return ()=>clearInterval(timer);
    })

    const getData = async ()=>{
        const response =  await axios.get("api/quizzes");
        setQuestions(response.data.quizes);
    }

    const getSelectedCategoryQuestions = (name)=>{
        setCategory(name)
        setScore(initialScore);
        setCurqueIndex(initialIndexValue);  //if curqueIndex is not reseted then for other category, quiz will start from last categories current index question. hence reseting index to 0
        getData();    // fetches questions from DB
        setCategoryQuestions(questions.filter(question=>question.categoryName===name.toLowerCase()));
        setSelectedOption([]);
        navigate("/rules");
    }
            
    const nextQuestionHandler = ()=>{
        if(selectedOption.length>0 || selectedOption.length===undefined){
            setSeconds(initialTimerValue);
            setCurqueIndex(curqueIndex+1);
        }
        else{
            setError(true);
           
        }
        setSelectedOption([]);
       
    }

    const viewResult=()=>{
        navigate("/result");
    }

    const QuitQuiz=()=>{
        alert("Your quiz will end and you will be redirected to home page");
        navigate("/")
    }

    const selectOptionHandler = (entireOption)=>{
        setError(false);
        if(entireOption.isCorrect){
            setScore(score+1);
        }
        setSelectedOption(entireOption);
        // modifying the array of question object by pushing user selected option as userAnswer
        categoryQuestions[curqueIndex].userAnswer = entireOption.text;
    }

    return <QuestionContext.Provider value= {{category, score, seconds, questions, curqueIndex, error, viewResult, selectedOption, categoryQuestions, selectOptionHandler, nextQuestionHandler, QuitQuiz, getSelectedCategoryQuestions}} >{children}
    </QuestionContext.Provider>
}

export{QuestionProvider,useQuestion }