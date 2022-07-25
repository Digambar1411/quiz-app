import { useNavigate } from "react-router-dom";
import { useTheme, useAuth } from "../../contexts";
import "./nav.css";

export function Navbar(){
    const navigate  = useNavigate();
    const { theme, toggleTheme} = useTheme();
    const { isLoggedin, logoutHandler } = useAuth();

    return(
        <div className="nav-test">
            <div onClick={()=>navigate("/")}className="brand-name">NeoQuiz</div>
            {
                theme==="light" ? 
                <div className="nav-icons">
                    <span 
                        className="material-icons theme-icon md-36 dark-symbol" 
                        onClick={toggleTheme}>
                            dark_mode
                    </span>
                    {
                        !isLoggedin ? <span className="material-icons theme-icon md-36 dark-symbol" onClick={()=>navigate("/login")}>
                        account_circle
                    </span> : <button className="control-btn" onClick={logoutHandler}>Logout</button> 
                        
                    }

                </div> : 
                <div className="nav-icons">
                    <span 
                        className="material-icons-outlined theme-icon md-32" 
                        onClick={toggleTheme}>
                            light_mode
                    </span>
                    {
                        !isLoggedin ? <span className="material-icons theme-icon md-36" onClick={()=>navigate("/login")}>
                        account_circle
                    </span> : <button className="control-btn" onClick={logoutHandler}>Logout</button> 
                        
                    }
                </div>    
            }
        </div>
    )
}