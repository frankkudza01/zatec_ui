import React from 'react';
import AlbumListComponent from '../components/albums/AlbumListComponent';
import NavComponent from '../components/dashboard/nav/NavComponent';

export default function AlbumListPage(){
    return(
        <>
            <div className="wrapper">
                <NavComponent/>
                <AlbumListComponent/>
            </div>
        </>
    )
}