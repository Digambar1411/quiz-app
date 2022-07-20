import { useState, useContext, createContext, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

const useAuth =()=> useContext(AuthContext);

const AuthProvider =({children})=>{
    const navigate = useNavigate();

    const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem("token") ? true : false)

    const guestLoginHandler= async()=>{
        const response = await axios.post('/api/auth/login',{
            email:"admin@gmail.com",
            password:"123456"
        })

        localStorage.setItem("token", response.data.encodedToken)
        const token = localStorage.getItem("token");
        if(token){
            navigate("/");
            setIsLoggedin(true)
        }
        
    }

    const logoutHandler =()=>{
        localStorage.removeItem("token");
        setIsLoggedin(false)
        navigate("/")
    }
    

    return(
        <AuthContext.Provider value={{guestLoginHandler,logoutHandler, isLoggedin }}>{children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider}