import React from 'react';
import FeaturedAlbums from './albums/FeaturedAlbums';
import SongsComponent from './songs/SongsComponent';
import GenresComponent from './genres/GenresComponent';
export default function DashboardComponent(){
    return(
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <FeaturedAlbums/>
                        <div className="row">
                            <SongsComponent/>
                            <GenresComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}