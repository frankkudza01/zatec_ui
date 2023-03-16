import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useNavigate, useParams} from 'react-router-dom';


export default function EditAlbumComponent(){

    const navigate = useNavigate();
    // GET DATA TO FORM
    const [albums, setAlbums]=useState([]);
    const {id}=useParams();

    const getAlbum = async () =>{
        const response = await axios.get(`http://127.0.0.1:8000/api/albums/show/${id}`);
        setAlbums(response.data.albums);

     };

    useEffect(()=>{
        getAlbum();
     },[]);

    //DATA SUBMISSION 
    const [albumInput, setAlbum]=useState({
        title:'',
        description:'',
    });
    
    

    const handleInput=(e)=>{
        e.persist();
        setAlbum({...albumInput, [e.target.name]:e.target.value})
    }

    const updateAlbum= async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('title',albumInput.title);
        formData.append('description',albumInput.description);

        await axios.post(`http://127.0.0.1:8000/api/albums/update/${id}`,formData).then(response=>{
            if(response.data.status===true){
                console.log(response);  
                navigate("/albums");
            }
            
        })

    }

    

    return(
        <>
             <div id="content-page" className="content-page">
                <div className="container-fluid">
                <Link to="/albums" type="submit" className="btn btn-primary" style={{marginBottom:"2%"}}>Back</Link>
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                <h4 className="card-title">Edit Album</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <form onSubmit={updateAlbum} encType='multipart/form-data'>
                                    <div className="form-group">
                                        <label>Album Name:</label>
                                        <input type="text" className="form-control" placeholder={albums.title} name="title" value={albumInput.title} onChange={handleInput}/>
                                    </div>

                                    
                                    <div className="form-group">
                                        <label>Description:</label>
                                        <textarea className="form-control" name="description" value={albumInput.description} placeholder={albums.description} onChange={handleInput} rows="4"></textarea>
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