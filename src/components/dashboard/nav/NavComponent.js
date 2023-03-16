import React from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

export default function NavComponent(){
    const navigate = useNavigate();
    const logoutSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/user/logout').then(response=>{
            if(response.data.status===true){
                localStorage.removeItem('token');
                console.log(response.data.token);
                navigate("/");
            }
        })

    }
    return(
        <>
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <a href="/dashboard" className="header-logo">
                
                    </a>
                    <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="main-circle"><i className="las la-bars"></i></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className="active">
                            <Link to="/dashboard" className="iq-waves-effect" data-toggle="collapse" aria-expanded="true"><span className="ripple rippleEffect"></span><i className="las la-home"></i><span>Dashboard</span></Link>
                        </li>
                        
                    </ul>
                    </nav>
                </div>
            </div>
     
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="iq-menu-bt d-flex align-items-center">
                        <div className="wrapper-menu">
                            <div className="main-circle"><i className="las la-bars"></i></div>
                        </div>
                        <div className="iq-navbar-logo d-flex justify-content-between">
                            <a href="/dashboard" className="header-logo">
                            
                                <div className="pt-2 pl-2 logo-title">
                                <span className="text-primary text-uppercase">Muzik Manager</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                        <i className="ri-menu-3-line"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="list-unstyled iq-menu-top d-flex justify-content-between mb-0 p-0">
                            <li><Link to="/albums">Albums</Link></li>
                            <li><Link to="/songs">Songs</Link></li>
                        </ul>
                        <ul className="navbar-nav ml-auto navbar-list">
                            <li className="line-height pt-3">
                                <button type="button" onClick={logoutSubmit} className="btn btn-primary"> Logout</button>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </div>
        </>
    )
}