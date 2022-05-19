import { Link } from "react-router-dom";
import "./footer.css";
import lightTwitterLogo from "../../assets/twitter-light.png";
import lightGithubLogo from "../../assets/github-light.png";
import lightLinkedinLogo from "../../assets/linkedin-light.png";

// import twitterDark from "../../assets/twitter1.png";
// import linkedinDark from "../../assets/linkedin1.png";
// import githubDark from "../../assets/github1.png";


export function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="footer-head">Made by Digambar</div>
                <div className="social-icon-div">
                    <Link to="https://github.com/Digambar1411">
                        <img
                            className="social-icon"
                            src={ lightGithubLogo }
                            alt="github_logo"
                        />
                    </Link>

                    <Link to="https://twitter.com/deshawald14">
                        <img
                            className="social-icon"
                            src={ lightTwitterLogo }
                            alt="twitter_logo"
                        />
                    </Link>

                    <Link to="https://www.linkedin.com/in/digambar-deshawal-9b279b147/">
                        <img
                            className="social-icon"
                            src={ lightLinkedinLogo }
                            alt="linkedin_logo"
                        />
                    </Link>
                </div>
            </footer>
        </>
    )
	
}
