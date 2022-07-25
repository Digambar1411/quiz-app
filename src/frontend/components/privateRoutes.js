import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts";

const PrivateRouts=({children})=>{

    const { isLoggedin } = useAuth();

    return(
        <> { isLoggedin ? children : <Navigate replace to ="/login" /> } </>

    )
}

export  { PrivateRouts } 