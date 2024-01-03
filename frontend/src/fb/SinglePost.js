import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {useSelector} from 'react-redux'

function SinglePost() {
  const navigate = useNavigate()
  const {uix} = useSelector((state)=>state.u)
  const { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const handleSinglePost = async () => {
      try {
        const { data } = await axios.get(`/post/f/${id}`);
       
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleSinglePost();
  }, [id]);

  useEffect(() => {
    // Redirect to login if the user is not logged in
    if (!uix?.isAdmin) {
      // Pass the current path as a query parameter
      navigate(`/login?redirect=/facebook/news/${id}`);
    }
  }, [uix?.isAdmin, id, navigate, post]);

  if (!post) {
    // Render a loading indicator or return null while fetching the post
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <div className="d-flex flex-column pt-3 mb-2">
      <h2>{post?.description}...</h2>
        <img src={post?.img} alt="" style={{width:"100%", height:"80vh", objectFit:"cover", cursor:"pointer"}} />
        
      </div>
    </div>
  );
}

export default SinglePost;
