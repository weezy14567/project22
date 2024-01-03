import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../ApiConfig';

function AllPosts() {
  const [all, setAll] = useState();
  useEffect(() => {
    const handleSinglePost = async () => {
      try {
        const { data } = await axios.get(`post`);
      
        setAll(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleSinglePost();
  }, []);
  return (
    <div className="d-flex flex-column my-4 justify-content-center align-items-center">
      {all?.map((i) => (
        <Link
          key={i._id}
          className="d-flex flex-column mb-3 "
          to={`facebook/news/${i.description}/${i._id}`}
        >
          {i.description}
        </Link>
      ))}
    </div>
  );
}

export default AllPosts;
