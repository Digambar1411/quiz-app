import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import "./auth.css";

export function Signup(){
    return(
        <main className="main-auth-page">
            <Navbar />
            <div className="login-page">
                <div className="login-card flex-col">
                    <h1 className="auth-heading">Sign up</h1>
                    <form className="flex-col-login">
                        <div className="input-div">
                            <label className="input-label" for="email">Email address</label>
                            <input className="input" type="email" placeholder="abc@gmail.com" required/>
                        </div>

                        <div className="input-div">
                            <label className="input-label" for="password">Password</label>
                            <input className="input" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id='password' type="password" required/>
                        </div>

                        <div className="input-div">
                            <label className="input-label" for="password">Re-type Password</label>
                            <input className="input" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id='password' type="password" required/>
                        </div>

                        <div className="password-section">
                            <div className="flex-left">
                                <label className="checkbox-input-label">
                                    <input className="input-checkbox" required type="checkbox" name="light"  value=""/>
                                    Accept terms & condition
                                </label>
                            </div>
                        </div>
                            
                        <div >
                            <button className="signup-btn">Create account</button>
                        </div>
                    </form>

                    <div className="auth-controls signup-control">
                        <span>Already have account ?</span>
                        <div className="auth-controls center">
                            <Link className="control-btn" to="/login">Login
                            <span className="material-icons-outlined control-icon">login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
       </main>
    )
}