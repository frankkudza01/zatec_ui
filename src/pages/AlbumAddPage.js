import React from 'react';
import AddAlbumComponent from '../components/albums/AddAlbumComponent';
import NavComponent from '../components/dashboard/nav/NavComponent';
export default function AlbumAddPage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <AddAlbumComponent/>
            </div>
        </>
    )
}