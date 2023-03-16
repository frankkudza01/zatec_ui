import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function AddAlbumComponent(){

    const [albumInput, setAlbum]=useState({
        title:'',
        description:'',
        release_date:'',
    });
    
    const [image,setImage]=useState();

    const handleInput=(e)=>{
        e.persist();
        setAlbum({...albumInput, [e.target.name]:e.target.value})
    }

    const submitAlbum= async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('cover_page',image);
        formData.append('title',albumInput.title);
        formData.append('description',albumInput.description);
        formData.append('release_date',albumInput.release_date);

        await axios.post(`http://127.0.0.1:8000/api/albums/create`,formData).then(response=>{
            if(response.data.status===true){
                console.log(response);
                
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
                                <h4 className="card-title">Add Album</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <form onSubmit={submitAlbum} encType='multipart/form-data'>
                                    <div className="form-group">
                                        <label>Album Name:</label>
                                        <input type="text" className="form-control" placeholder="Album Title" name="title" value={albumInput.title} onChange={handleInput}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Released On:</label>
                                        <input type="date" className="form-control" name="release_date" value={albumInput.release_date} onChange={handleInput}/>
                                    </div>
                                
                                    <div className="form-group">
                                        <label>Album Preview:</label><br></br>
                                            <input type="file" name="cover_page" onChange={(e) => setImage(e.target.files[0])}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Description:</label>
                                        <textarea className="form-control" name="description" value={albumInput.description} onChange={handleInput} rows="4"></textarea>
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