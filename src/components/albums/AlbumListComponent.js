import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function AlbumListComponent(){
    const [albums, setAlbums]=useState([]);

    const getAlbums = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/albums/albums`);
        setAlbums(response.data.albums);
        console.log(response.data.albums);
    };

    const deleteAlbum = async (id) => {
        await axios.get(`http://localhost:8000/api/albums/destroy/${id}`).then(({data})=>{
            getAlbums();
            console.log(data);
        });
     }

     

    useEffect(()=>{
        getAlbums();
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
                                <h4 className="card-title">Album Lists</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                <Link to="/add-album" className="btn btn-primary">Add New Album</Link>
                                </div>
                            </div>
                            <div className="iq-card-body">
                            <ul className="list-unstyled row feature-album-artist mb-0">
                            {
                              albums.map((album)=>(
                                <li className="col-lg-4  iq-music-box">
                                    <div className="feature-list">
                                        <Link to ={`edit-album/${album.id}`} className="btn btn-secondary btn-sm" style={{marginBottom:'2%'}}><i className="las la-edit "></i> Edit</Link>
                                        <button onClick={()=>deleteAlbum(album.id)} className="btn btn-primary btn-sm" style={{marginBottom:'2%'}}><i className="las la-trash "></i> Delete</button>
                                        <p className="font-weight-400  mb-0">{album.title}</p>
                                    </div>
                                    
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