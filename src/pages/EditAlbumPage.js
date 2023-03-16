import React from 'react';
import EditAlbumComponent from '../components/albums/EditAlbumComponent';
import NavComponent from '../components/dashboard/nav/NavComponent';
export default function AlbumEditPage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <EditAlbumComponent/>
            </div>
        </>
    )
}