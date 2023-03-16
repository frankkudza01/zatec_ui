import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function SongsListComponent(){
   const [songs, setSongs]=useState([]);

   const getSongs = async () =>{
      const response = await axios.get(`http://127.0.0.1:8000/api/songs/songs`);
      setSongs(response.data.songs);
      console.log(response.data);
   };

   const deleteSong = async (id) => {
      await axios.get(`http://localhost:8000/api/songs/destroy/${id}`).then(({data})=>{
         getSongs();
         console.log(data);
      });
   }

   useEffect(()=>{
      getSongs();
   },[]);

    return(
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                <h4 className="card-title">Song Lists</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                <Link to="/add-song" className="btn btn-primary">Add New Song</Link>
                                </div>
                            </div>
                            <div className="iq-card-body">
                            <ul className="list-unstyled row hot-songs mb-0">
                            {
                              songs.map((song)=>(
                                 <li key={song.id} className="col-lg-12">
                                    <div className="iq-card iq-card-transparent">
                                       <div className="iq-card-body p-0">
                                          <div className="media align-items-center">
                                             <div className="iq-thumb-hotsong">
                                                <div className="iq-music-overlay"></div>
                                                <div className="iq-music-overlay"></div>
                                                <a href ="music-player.html"><img src="logo.png"  className="img-fluid avatar-60" alt=""/>
                                                </a>
                                                <div className="overlay-music-icon">
                                                   <a href ="/songs">
                                                      <i className="las la-play-circle font-size-24"></i>
                                                   </a>
                                                </div>
                                             </div>
                                             <div className="media-body ml-3">
                                                <h6 className="mb-0 iq-song-title">{song.title}</h6>
                                                <small>Duration : {song.length} Minutes</small>
                                                
                                             </div>
                                             
                                             <button onClick={()=>deleteSong(song.id)} className="btn btn-primary"><i className="las la-trash "></i> Delete</button>
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
            </div>
        </>
    )
}