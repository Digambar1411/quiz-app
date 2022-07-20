import React,{useState} from "react";
import { Navbar, Footer } from "../../components";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";
import "./auth.css";

export function Login(){
    const navigate = useNavigate();
    const { guestLoginHandler } = useAuth();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const loginHandler=async()=>{
        
            try{
                const response = await axios.post('api/auth/login',{
                    email:{email},
                    password:{password}
                })
                console.log(response);
    
                localStorage.setItem("token1", response.data.encodedToken)
                const token1 = localStorage.getItem("token1");
                if(token1){
                    navigate("/")
                }
            }

            catch(error){
                console.log(error)
            }
        
      
    }
    
    return (
        <main className="main-auth-page">
            <Navbar />
            <div className="login-page">
                <div className="login-card">
                    <p className="auth-heading">Login</p>
                    <form className="flex-col-login">

                        <div className="input-div">
                            <label className="input-label" htmlFor="email">Email address</label>
                            <input 
                                className="input" id="email"  
                                type="email" 
                                placeholder="john@edu.com" 
                                value={email} 
                                onChange={(e)=>setEmail(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="input-div" >
                            <label className="input-label" htmlFor="password">Password</label>
                            <input 
                                className="input" id="password" 
                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" 
                                type="password" 
                                onChange={(e)=>setPassword(e.target.value)} 
                                value={password} 
                                required
                            />
                        </div>

                        {/* <div className="password-section">
                                <label className="checkbox-input-label center" htmlFor="remember">
                                    <input 
                                        className="input-checkbox" 
                                        type="checkbox" 
                                        id="remember" 
                                    />
                                    Remember me
                                </label>
                                <Link  className="link-forgot-password" to="#">Forgot password?</Link>
                        </div> */}

                        <div className="auth-btns">
                            <button className="auth-btn login" onClick={loginHandler}>Login</button>
                            <button className="auth-btn guest-login-btn" onClick={guestLoginHandler}>Guest Login</button>
                        </div>
                    </form>

                    <div className="auth-controls">
                        <span>Dont have account?</span>
                        <Link className="auth-control-btn" to="/signup"> Signup</Link>
                    </div>

                </div>
            </div>
            <Footer />
        </main>

    );
}