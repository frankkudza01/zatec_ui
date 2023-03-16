import React from 'react';
import SongsListComponent from '../components/songs/SongsListComponent';
import NavComponent from '../components/dashboard/nav/NavComponent';

export default function SongListPage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <SongsListComponent/>
            </div>
        </>
    )
}