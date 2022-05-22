import { useNavigate } from "react-router";
import "./nav.css";
import lightThemeLogo from "../../social logos/theme.png";
// import themeLogo from "../../social logos/theme-dark.png";


export function Navbar(){
    const { navigate } = useNavigate();
    return(
        <div className="nav-test">
            <div onClick={()=>navigate("/")}className="brand-name">Neo Quiz</div>
            <img className="theme-icon" src={ lightThemeLogo } alt="theme_toggler"/>
        </div>
    )
}