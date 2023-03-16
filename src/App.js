import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AlbumAddPage from './pages/AlbumAddPage';
import AlbumListPage from './pages/AlbumListPage';
import AlbumEditPage from './pages/EditAlbumPage';
import SongListPage from './pages/SongsListPage';
import AddSongPage from './pages/AddSongPage';
import ViewAlbumPage from './pages/ViewAlbumPage';
import ViewGenrePage from './pages/ViewGenrePage';


function App() {

  axios.defaults.headers.post['Content-Type']='application/json';
  axios.defaults.headers.post['Accept']='application/json';
  axios.defaults.withCredentials=true;
  axios.interceptors.request.use(function(config){
    const token=localStorage.getItem('token');
    config.headers.Authorization=token ? `Bearer ${token}` : '';   
    return config;
  });
  return (
    <>
        <Router>
        <Routes>
          <Route exact path='/' element={<SigninPage/>}></Route>
          <Route exact path='/signup' element={<SignupPage/>}></Route>
          <Route exact path='/dashboard' element={<DashboardPage/>}></Route>
          <Route exact path='/add-album' element={<AlbumAddPage/>}></Route>
          <Route exact path='/albums' element={<AlbumListPage/>}></Route>
          <Route exact path='/albums/edit-album/:id' element={<AlbumEditPage/>}></Route>
          
          <Route exact path='/dashboard/view-album/:id' element={<ViewAlbumPage/>}></Route>
          <Route exact path='/dashboard/view-genre/:id' element={<ViewGenrePage/>}></Route>
          <Route exact path='/songs' element={<SongListPage/>}></Route>
          <Route exact path='/add-song' element={<AddSongPage/>}></Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
