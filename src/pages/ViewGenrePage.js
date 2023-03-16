import React from 'react';
import ViewGenre from '../components/dashboard/genres/ViewGenre';
import NavComponent from '../components/dashboard/nav/NavComponent';

export default function ViewGenrePage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <ViewGenre/>
            </div>
        </>
    )
}