
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useNavigate, useParams} from 'react-router-dom';

export default function ViewGenrePage(){
    const navigate = useNavigate();
    const [genre, setGenre]=useState([]);
    const [song, setSongs]=useState([]);
    const {id}=useParams();

    const getGenre = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/genres/show/${id}`);
        setGenre(response.data.genre);
        setSongs(response.data.songs);
        console.log(response.data.songs);
     };
  
     useEffect(()=>{
        getGenre();
     },[]);

    return(
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-7">
                        <div className="iq-card iq-card-transparent  iq-song-back">
                            <div className="iq-card-body">
                                <div className="iq-music-img1">
                                
                                </div>
                                <div className="player1 row">
                                <div className="details1 col-6 col-sm-6 col-lg-6">
                                    
                                    <div>
                                        <div className="track-name1">{genre.title}</div>
                                        <div className="track-artist1">{genre.title}</div>
                                    </div>
                                </div>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="iq-card iq-card-transparent">
                            <div className="iq-card-body p-0">
                                <ul className="list-unstyled row mb-0">
                                {
                                song.map((song)=>(
                                <li className="col-lg-12 col-md-12">
                                    <div className="iq-card iq-card-transparent">
                                        <div className="iq-card-body p-0">
                                            <div className="media align-items-center">
                                            <div className="iq-thumb-hotsong">
                                                <div className="iq-music-overlay"></div>
                                                   
                                                <div className="overlay-music-icon">
                                                    <i className="las la-play-circle font-size-24"></i>
                                                </div>
                                            </div>
                                            
                                                    <div key={song.id}  className="media-body ml-3">
                                                        <h6 className="mb-0">{song.title}</h6>
                                                        <small>{song.length} Minutes</small>
                                                        <hr></hr>
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                    </div>
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