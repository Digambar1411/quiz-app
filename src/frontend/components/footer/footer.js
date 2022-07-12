import "./footer.css";
import { useTheme } from "../../contexts/theme-context";
import lightTwitterLogo from "../../social logos/twitter-light-42.png";
import lightGithubLogo from "../../social logos/github-light-48.png";
import lightLinkedinLogo from "../../social logos/linkedin-light-48.png";

import twitterDark from "../../social logos/twitter1.png";
import linkedinDark from "../../social logos/linkedin1.png";
import githubDark from "../../social logos/github1.png";


export function Footer() {

    const { theme} = useTheme();
    return(
        <>
            <footer className="footer">
                <div className="footer-head">Made by Digambar</div>
                <div className="social-icon-div">
                    <a href="https://github.com/Digambar1411" target="_blank"  rel="noopener noreferrer">
                        <img
                            className="social-icon"
                            src={ theme === "light" ? lightGithubLogo : githubDark}
                            alt="github_logo"
                        />
                    </a>

                    <a href="https://twitter.com/deshawald14" target="_blank"  rel="noopener noreferrer">
                        <img
                            className="social-icon"
                            src={ theme === "light" ? lightTwitterLogo :twitterDark}
                            alt="twitter_logo"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/digambar-deshawal-9b279b147/" target="_blank"  rel="noopener noreferrer">
                        <img
                            className="social-icon"
                            src={  theme === "light" ? lightLinkedinLogo: linkedinDark}
                            alt="linkedin_logo"
                        />
                    </a>
                </div>
            </footer>
        </>
    )
	
}
