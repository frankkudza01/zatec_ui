import React from 'react';
import DashboardComponent from '../components/dashboard/DashboardComponent';
import NavComponent from '../components/dashboard/nav/NavComponent';
export default function DashboardPage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <DashboardComponent/>
            </div>
        </>
    )
}