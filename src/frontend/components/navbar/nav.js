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
            <div onClick={()=>navigate("/")}className="brand-name">Neo Quiz</div>
            <img className="theme-icon" src={theme==="light"? lightThemeLogo : themeLogo} alt="theme_toggler"onClick={toggleTheme} />
        </div>
    )
}