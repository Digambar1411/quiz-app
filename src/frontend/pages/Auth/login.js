import React from "react";
import { Navbar, Footer } from "../../components";
import { Link } from "react-router-dom";
import "./auth.css";

export function Login(){
    
    return (
        <main className="main-auth-page">
            <Navbar />
            <div className="login-page">
                <div className="login-card flex-col">
                    <p className="auth-heading">Login</p>
                    <form className="flex-col-login">

                        <div className="input-div">
                            <label className="input-label" for="email">Email address</label>
                            <input className="input" type="email" placeholder="john@edu.com" required/>
                        </div>

                        <div className="input-div" >
                            <label className="input-label" for="password">Password</label>
                            <input className="input" placeholder="e&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" id='password' type="password" required/>
                        </div>

                        <div className="password-section">
                                <label className="checkbox-input-label">
                                    <input className="input-checkbox" type="checkbox" name="light"  value=""/>
                                    Remember me
                                </label>
                                <Link  className="link-forgot-password" to="#">Forgot password?</Link>
                        </div>

                        <div >
                            <button className="login-btn">Login</button>
                        </div>
                    </form>

                    <div className="auth-controls login-control">
                        <Link className=" control-btn" to="/signup">Create New Account
                        <span className="material-icons-outlined control-icon">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    );
}