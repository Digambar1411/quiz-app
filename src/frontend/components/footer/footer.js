import "./footer.css";
import lightTwitterLogo from "../../social logos/twitter-light.png";
import lightGithubLogo from "../../social logos/github-light.png";
import lightLinkedinLogo from "../../social logos/linkedin-light.png";

// import twitterDark from "../../social logos/twitter1.png";
// import linkedinDark from "../../social logos/linkedin1.png";
// import githubDark from "../../social logos/github1.png";


export function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="footer-head">Made by Digambar</div>
                <div className="social-icon-div">
                    <a href="https://github.com/Digambar1411" target="_blank"  rel="noopener noreferrer">
                        <img
                            className="social-icon"
                            src={ lightGithubLogo }
                            alt="github_logo"
                        />
                    </a>

                    <a href="https://twitter.com/deshawald14" target="_blank"  rel="noopener noreferrer">
                        <img
                            className="social-icon"
                            src={ lightTwitterLogo }
                            alt="twitter_logo"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/digambar-deshawal-9b279b147/" target="_blank"  rel="noopener noreferrer">
                        <img
                            className="social-icon"
                            src={ lightLinkedinLogo }
                            alt="linkedin_logo"
                        />
                    </a>
                </div>
            </footer>
        </>
    )
	
}
