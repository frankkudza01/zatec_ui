import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function FeaturedAlbums()
{
   const [albums, setAlbums]=useState([]);

   const getAlbums = async () =>{
      const response = await axios.get(`http://127.0.0.1:8000/api/albums/albums`);
      setAlbums(response.data.albums);
      console.log(response.data.albums);
   };

   useEffect(()=>{
      getAlbums();
   },[]);


    return(
        <>
                <div className="col-lg-12">
                  <div className="iq-card">
                     <div className="iq-card-header d-flex justify-content-between align-items-center">
                        <div className="iq-header-title">
                           <h4 className="card-title">Featured Albums</h4>
                        </div>
                        <div id="feature-album-artist-slick-arrow" className="slick-aerrow-block"></div>
                     </div>
                     <div className="iq-card-body">

                        <ul className="list-unstyled row feature-album-artist mb-0">
                        
                           {
                              albums.map((album)=>(
                              <li key={album.id} className="col-lg-4  iq-music-box">
                                 <div className="iq-thumb-artist">
                                    <div className="iq-music-overlay"></div>
                                    <Link to ={`view-album/${album.id}`}>
                                       <img src={`http://127.0.0.1:8000/albums/cover_page/images/${album.cover_page}`} className="w-100" style={{width:"100px",height:"300px"}} alt=""/>
                                    </Link>
                                    <div className="overlay-music-icon">
                                       <Link to ={`view-album/${album.id}`}>
                                          <i className="las la-eye"></i>
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="feature-list text-center">
                                    <h6 className="font-weight-600  mb-0">{album.title}</h6>
                                    <small>{album.release_date}</small>
                                 </div>
                              </li>
                              ))
                           }
                           
                        </ul>
                     </div>
                  </div>
               </div>
        </>
    )
}