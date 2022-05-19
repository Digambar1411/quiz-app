import { Link } from "react-router-dom";
import "./nav.css";
import lightThemeLogo from "../../assets/theme.png";
// import themeLogo from "../../assets/theme-dark.png";


export function Navbar(){
    return(
        <div className="nav-test">
            <Link to="home.html"><div className="brand-name">Neo Quiz</div></Link>
            <img className="theme-icon" src={ lightThemeLogo } alt="theme_toggler"/>
        </div>
    )
}