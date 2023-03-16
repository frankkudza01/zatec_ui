import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function SigninComponent(){
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users = [{ email: email, password: password }];

    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.email === email);
        axios.post('http://127.0.0.1:8000/api/auth/login', {
            email: email,
            password: password
        }).then(response => {
            console.log(response)
            if (account && account.password === password) {
                
                if(response.data.status===true ){
                    localStorage.setItem("authenticated", true);
                    localStorage.setItem('token',response.data.token);
                    console.log(response.data.token);
                    navigate("/dashboard");
                }
                
            }
        });
    }

    return(
        <>
            <section className="sign-in-page">
                <div className="container">
                    <div className="row justify-content-center align-items-center height-self-center">
                    <div className="col-md-6 col-sm-12 col-12 align-self-center">
                        <div className="sign-user_card ">
                            
                            <div className="sign-in-page-data">
                                <div className="sign-in-from w-100 pt-5 m-auto">
                                <h1 className="mb-3 text-center">Sign in</h1>
                                <form className="mt-4" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label forHtml="exampleInputEmail2">Email address</label>
                                        <input type="email" className="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label forHtml="exampleInputPassword2">Password</label>
                                        <input type="password" className="form-control mb-0" id="exampleInputPassword2" placeholder="Password" value={password} name="password" onChange={e => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="sign-info">
                                        <button type="submit" className="btn btn-primary mb-2">Sign in</button>
                                        <span className="dark-color d-block line-height-2">Don't have an account? <a href="sign-up.html">Sign up</a></span>
                                    </div>
                                    <div className="d-inline-block w-100">
                                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                            <label className="custom-control-label" forHtml="customCheck1">Remember Me</label>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="d-flex justify-content-center links">
                                Don't have an account? <Link to="/signup" className="ml-2">Sign Up</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                  
                </div>
            </section>
        </>
    )
}