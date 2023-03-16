
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function SongsComponent(){
   const [songs, setSongs]=useState([]);

   const getSongs = async () =>{
      const response = await axios.get(`http://127.0.0.1:8000/api/songs/songs`);
      setSongs(response.data.songs);
      console.log(response.data);
   };

   useEffect(()=>{
      getSongs();
   },[]);

    return(
        <>
                <div className="col-lg-6">
                  <div className="row">
                     <div className="col-lg-12 col-md-12">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                           <div className="iq-card-header d-flex justify-content-between align-items-center">
                              <div className="iq-header-title">
                                 <h4 className="card-title">Recent Songs</h4>
                              </div>
                              <div id="hot-song-slick-arrow" className="slick-aerrow-block"></div>
                           </div>
                           <div className="iq-card-body">
                              <ul className="list-unstyled row hot-songs mb-0">
                              {
                              songs.map((song)=>(
                                 <li key={song.id}  className="col-lg-12">
                                    <div className="iq-card iq-card-transparent">
                                       <div className="iq-card-body p-0">
                                          <div className="media align-items-center">
                                             <div className="iq-thumb-hotsong">
                                                <div className="iq-music-overlay"></div>
                                                <div className="iq-music-overlay"></div>
                                                <a href =""><img src="logo.png"  className="img-fluid avatar-60" alt=""/>
                                                </a>
                                                <div className="overlay-music-icon">
                                                   <a href ="">
                                                      <i className="las la-play-circle font-size-24"></i>
                                                   </a>
                                                </div>
                                             </div>
                                             <div className="media-body ml-3">
                                                <h6 className="mb-0 iq-song-title">{song.title}</h6>
                                                <small>Duration : {song.length} Minutes</small>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <hr></hr>
                                 </li>
                                 ))
                              }
                                 
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </>
    )
}