import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function SignupComponent(){
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/auth/register', {
            name: name,
            email: email,
            password: password
        }).then(response => {
            console.log(response)
            navigate("/")
            
        });
    };

    return(
        <>
             <section className="sign-in-page">
                <div className="container">
                    <div className="row justify-content-center align-items-center height-self-center">
                    <div className="col-md-6 col-sm-12 col-12 align-self-center">
                        <div className="sign-user_card ">
                            
                            <div className="sign-in-page-data">
                                <div className="sign-in-from w-100 m-auto pt-5">
                                <h1 className="mb-3 text-center">Sign Up</h1>
                                <form className="mt-4" method="POST" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail2">Your Full Name</label>
                                        <input type="text" className="form-control mb-0" id="exampleInputEmail2" placeholder="Your Full Name" name="name" value={name} onChange={e => setName(e.target.value)} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail3">Email address</label>
                                        <input type="email" className="form-control mb-0" id="exampleInputEmail3" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword2">Password</label>
                                        <input type="password" className="form-control mb-0" id="exampleInputPassword2" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="d-inline-block w-100">
                                        <div className="custom-control custom-checkbox d-inline-block mt-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                            <label className="custom-control-label" htmlFor="customCheck2">I accept <Link href="#">Terms and Conditions</Link></label>
                                        </div>
                                    </div>
                                    <div className="sign-info">
                                        <button type="submit" className="btn btn-primary mb-2">Sign up</button>
                                    </div>
                                    
                                </form>

                                <div className="mt-2">
                                    <div className="d-flex justify-content-center links">
                                        Already Have an Account <Link to="/" className="ml-2">Sign In</Link>
                                    </div>
                                        
                                </div>
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