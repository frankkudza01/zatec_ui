import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function GenresComponent(){

   const [genres, setGenres]=useState([]);

   const getGenres = async () =>{
      const response = await axios.get(`http://127.0.0.1:8000/api/genres/genres`);
      setGenres(response.data.genres);
      console.log(response.data.genres);
   };

   useEffect(()=>{
      getGenres();
   },[]);


   
    return(
        <>
            <div className="col-lg-6">
                  <div className="row">
                     <div className="col-lg-12 col-md-12">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                           <div className="iq-card-header d-flex justify-content-between align-items-center">
                              <div className="iq-header-title">
                                 <h4 className="card-title">Music Genres</h4>
                              </div>
                              <div id="hot-song-slick-arrow" className="slick-aerrow-block"></div>
                           </div>
                           <div className="iq-card-body">
                              <ul className="list-unstyled row hot-songs mb-0">
                              {
                                 genres.map((genre)=>(
                                 <li className="col-lg-12">
                                    <div className="iq-card iq-card-transparent">
                                       <div className="iq-card-body p-0">
                                          <div className="media align-items-center">
                                             
                                             <Link to ={`view-genre/${genre.id}`} className="media-body ml-3">
                                                <h6 className="mb-0 iq-song-title">{genre.title}</h6>
                                                
                                             </Link>
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