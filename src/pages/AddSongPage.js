import React from 'react';
import AddSongComponent from '../components/songs/AddSongComponent';
import NavComponent from '../components/dashboard/nav/NavComponent';

export default function AddSongPage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <AddSongComponent/>
            </div>
        </>
    )
}