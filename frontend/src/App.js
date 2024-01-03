import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Products from './productPage/Products';
import Login from './fb/Login';
import Post from './fb/Post';
import AllPosts from './fb/AllPosts';
import SinglePost from './fb/SinglePost';
import Log from './fb/logi/Log';
import { useSelector } from 'react-redux';

function App() {
  const {uix} = useSelector((state)=>state.u)
  console.log(uix)

  return (
    <BrowserRouter>
   
    <div >
    
      <div>
        <Routes>
        
          <Route path="/login" element={<Login/>}/>
          <Route path="/up" element={<Post/>}/>
          <Route path="/" element={<AllPosts/>}/>
          <Route path="/facebook/news/:description/:id" element={<SinglePost/>}/>
          <Route path="/logs" element={<Log/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
