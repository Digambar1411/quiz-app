import React from "react";
import { Navbar, Footer } from "../../components";
import { Link } from "react-router-dom";
import "./auth.css";

export function Login(){
    
    return (
        <main className="main-auth-page">
            <Navbar />
            <div className="login-page">
                <div className="login-card">
                    <p className="auth-heading">Login</p>
                    <form className="flex-col-login">

                        <div className="input-div">
                            <label className="input-label" for="email">Email address</label>
                            <input className="input" type="email" placeholder="john@edu.com" id="email" required/>
                        </div>

                        <div className="input-div" >
                            <label className="input-label" for="password">Password</label>
                            <input className="input" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" type="password" required/>
                        </div>

                        <div className="password-section">
                                <label className="checkbox-input-label center" for="remember">
                                    <input className="input-checkbox" type="checkbox" name="light"  id="remember" value=""/>
                                    Remember me
                                </label>
                                <Link  className="link-forgot-password" to="#">Forgot password?</Link>
                        </div>

                        <div className="auth-btns">
                            <button className="auth-btn login">Login</button>
                            <button className="auth-btn test-btn">Test credential</button>
                        </div>
                    </form>

                    <div className="auth-controls login-control">
                        <Link className="auth-control-btn center" to="/signup">Create New Account
                        <span className="material-icons-outlined control-icon">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    );
}