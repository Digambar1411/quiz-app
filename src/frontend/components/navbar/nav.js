import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/theme-context";
import "./nav.css";
import lightThemeLogo from "../../social logos/theme.png";
import themeLogo from "../../social logos/theme-dark.png";


export function Navbar(){
    const navigate  = useNavigate();
    const { theme, toggleTheme} = useTheme();
    return(
        <div className="nav-test">
            <div onClick={()=>navigate("/")}className="brand-name">NeoQuiz</div>
            {theme==="light"?<span class="material-icons theme-icon md-36 dark-symbol" onClick={toggleTheme}>
                dark_mode
            </span>:<span class="material-icons-outlined theme-icon md-30" onClick={toggleTheme}>
                light_mode
            </span>}
            {/* <img className="theme-icon" src={theme==="light"? lightThemeLogo : themeLogo} alt="theme_toggler" onClick={toggleTheme} /> */}
        </div>
    )
}