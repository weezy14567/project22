import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Post() {
  const imageRef = useRef(null);
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState('');

  const handleU = async (e) => {
    e.preventDefault();
    const file = imageRef.current.files[0];
  
    if (!file) {
      console.error('No file selected');
      return;
    }
  
    const storageRef = ref(storage, +Date.now() + '_' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    // Promise to wait for the upload task to complete
    const uploadComplete = new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress, if needed
        },
        (error) => {
          // Handle errors during upload
          console.error('Upload error:', error);
          reject(error);
        },
        () => {
          // Upload completed successfully
          resolve(uploadTask.snapshot.ref);
        }
      );
    });
  
    try {
      // Wait for the upload to complete
      const snapshotRef = await uploadComplete;
      // Get the download URL
      const downloadURL = await getDownloadURL(snapshotRef);
      console.log('File available at', downloadURL);
  
      // Now, you can send the downloadURL to the backend
      const formData = {
        img: downloadURL,
        description: description, // Ensure that 'description' is defined
      };
  
      const response = await axios.post(
        'http://localhost:8090/api/post/u',
        formData
      );
  
      console.log('Response from the server:', response.data);
    } catch (error) {
      // Handle errors during the entire process
      console.error('Error:', error);
    }
  };
  

  return (
    <div
      style={{ height: '100vh', width: '300px', margin: 'auto' }}
      className="d-flex flex-column justify-content-center align-item-center"
    >
      <Form onSubmit={handleU}>
        <FormGroup>
          <Form.Control
            type="file"
            style={{ border: '1px solid grey' }}
            ref={imageRef}
            onChange={(e) => setImg(e.target.files[0])}
          />
        </FormGroup>
        <FormGroup>
          <Form.Text>description</Form.Text>
          <Form.Control
            type="text"
            style={{ border: '1px solid grey' }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">save</Button>
      </Form>
    </div>
  );
}

export default Post;
