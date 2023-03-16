import React from 'react';
import ViewAlbum from '../components/albums/ViewAlbum';
import NavComponent from '../components/dashboard/nav/NavComponent';

export default function ViewAlbumPage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <ViewAlbum/>
            </div>
        </>
    )
}