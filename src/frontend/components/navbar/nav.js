import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/theme-context";
import "./nav.css";

export function Navbar(){
    const navigate  = useNavigate();
    const { theme, toggleTheme} = useTheme();
    return(
        <div className="nav-test">
            <div onClick={()=>navigate("/")}className="brand-name">NeoQuiz</div>
            {
                theme==="light" ? 
                <span 
                className="material-icons theme-icon md-36 dark-symbol" 
                onClick={toggleTheme}>
                    dark_mode
                </span> : 
                <span 
                className="material-icons-outlined theme-icon md-30" 
                onClick={toggleTheme}>
                    light_mode
                </span>
            }
        </div>
    )
}