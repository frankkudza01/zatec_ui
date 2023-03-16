import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function AddSongComponent(){

    const navigate = useNavigate();
    const [albums, setAlbums]=useState([]);
    const [genres, setGenres]=useState([]);

    const getAlbums = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/albums/albums`);
        setAlbums(response.data.albums);
        console.log(response.data.albums);
    };

    const getGenres = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/genres/genres`);
        setGenres(response.data.genres);
        console.log(response.data.genres);
     };

    useEffect(()=>{
        getAlbums();
        getGenres();
    },[]);

    const [songInput, setSong]=useState({
        title:'',
        length:'',
        genre_id:'',
        album_id:'',
    });

    const handleInput=(e)=>{
        e.persist();
        setSong({...songInput, [e.target.name]:e.target.value})
    }

    const submitAlbum= async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('title',songInput.title);
        formData.append('length',songInput.length);
        formData.append('genre_id',songInput.genre_id);
        formData.append('album_id',songInput.album_id);

        await axios.post(`http://127.0.0.1:8000/api/songs/create`,formData).then(response=>{
            if(response.data.status===true){
                console.log(response);
                navigate("/songs");
                
            }
            
        })

    }

    return(
        <>
             <div id="content-page" className="content-page">
                <div className="container-fluid">
                <Link to="/songs" type="submit" className="btn btn-primary" style={{marginBottom:"2%"}}>Back</Link>
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                <h4 className="card-title">Add Song</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <form onSubmit={submitAlbum} encType='multipart/form-data'>
                                    <div className="form-group">
                                        <label>Song Name:</label>
                                        <input type="text" className="form-control" placeholder="Album Title" name="title" value={songInput.title} onChange={handleInput}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Duration Minutes:</label>
                                        <input type="text" className="form-control" placeholder="4.32" name="length" value={songInput.length} onChange={handleInput}/>
                                    </div>
                                
                                    <div className="form-group">
                                        <label>Song Category:</label>
                                        <select className="form-control" id="exampleFormControlSelect1" name="genre_id" value={songInput.genre_id} onChange={handleInput}>
                                            <option selected="" disabled="">Song Category</option>
                                            {
                                                genres.map((genre)=>(
                                                    <option value={genre.id}>{genre.title}</option>
                                                ))
                                            }
                                            
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Song Album:</label>
                                        <select className="form-control" id="exampleFormControlSelect1" name="album_id" value={songInput.album_id} onChange={handleInput}>
                                            <option selected="" disabled="">Song Album</option>
                                            {
                                                albums.map((album)=>(
                                                    <option value={album.id}>{album.title}</option>
                                                ))
                                            }                                            
                                        </select>
                                    </div>
                                
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="reset" className="btn btn-danger">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}