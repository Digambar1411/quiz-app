import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import "./auth.css";

export function Signup(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword]= useState()

    const signUpHandler=async()=>{
        try{
            const response = await axios.post('/api/auth/signup',{
                email:"email",
                password:"password",
            })
            console.log(response);
        }
        catch{

        }
    }

    return(
        <main className="main-auth-page">
            <Navbar />
            <div className="login-page">
                <div className="login-card flex-col">
                    <h1 className="auth-heading">Sign up</h1>
                    <form className="flex-col-login">
                        <div className="input-div">
                            <label className="input-label" htmlFor="email">Email address</label>
                            <input 
                                className="input" 
                                type="email" id="email" 
                                placeholder="abc@gmail.com" 
                                onChange={(e)=>setEmail(e.target.value)} 
                                value={email} 
                                required
                            />
                        </div>

                        <div className="input-div">
                            <label className="input-label" htmlFor="password">Password</label>
                            <input 
                                className="input" 
                                id="password" 
                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" 
                                type="password" 
                                onChange={(e)=>setPassword(e.target.value)} 
                                value={password} 
                                required
                            />
                        </div>

                        <div className="input-div">
                            <label className="input-label" htmlFor="re-password">Confirm Password</label>
                            <input 
                                className="input" 
                                id="re-password" 
                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" 
                                type="password" 
                                onChange={(e)=>confirmPassword(e.target.value)} 
                                value={confirmPassword} 
                                required
                            />
                        </div>

                        <div className="password-section">
                            <div className="flex-left">
                                <label className="checkbox-input-label center" htmlFor="terms">
                                    <input className="input-checkbox" id="terms" required type="checkbox"/>
                                    Accept terms & condition
                                </label>
                            </div>
                        </div>
                            
                        <div >
                            <button className="auth-btn signup" onClick={signUpHandler}>Create account</button>
                        </div>
                    </form>

                    <div className="auth-controls">
                        <span>Already have account ?</span>
                        <Link className="auth-control-btn" to="/login">Login</Link>
                    </div>
                 
                </div>
            </div>
            <Footer />
       </main>
    )
}