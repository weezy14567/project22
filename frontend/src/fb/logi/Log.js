import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MessageBox from '../MessageBox';
import LoadingBox from '../LoadingBox';
import { loginstart, loginsuccess } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

function Log() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [l, setL] = useState();
  const dispatch = useDispatch()

  const hagakdhd = async (e) => {
    e.preventDefault();
    const forData = {
      name: name,
      password: password,
    };
    dispatch(loginstart());
    try {
    
      const { data } = await axios.post(`/user`, forData);
   
      dispatch(loginsuccess(data));
   
    } catch (error) {
      dispatch(loginstart());
      console.log(error);
      setL(false);
    }
  };




  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div style={{ width: '95%', height: '65%' }}>
        <div className="mb-3">
          {' '}
          <MessageBox />
        </div>
        <h3 className="text-center text-primary">uix</h3>
        <Form onSubmit={hagakdhd}>
          <FormGroup className="mb-2">
            <Form.Control
              type="text"
              required
              className="p-2 inputBg"
              placeholder="Enter number or email address "
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 inputBg"
              type="password"
              required
              placeholder="enter your password"
            />
          </FormGroup>
          <div className="d-grid ">
            <Button type="submit" className="fw-bold mb-3 p-2">
              {`Log In`}
            </Button>
            <Link className="text-center text-decoration-none mb-3">
              {' '}
              Forgotten password
            </Link>
            <p className="text-center mb-3">Or</p>
            <Button
              style={{ width: '90%', margin: 'auto', border: '1px solid grey' }}
              variant="light"
            >
              Create account
            </Button>
          </div>
        </Form>
      </div>
      <div
        style={{ width: '70%', fontSize: '14px' }}
        className="d-flex justify-content-between mb-2 text-secondary "
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span>English (UK)</span>
          <span>Français (France)</span>
          <span>Español</span>
          <span>Deutsch</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span>Hausa </span>
          <span>Português (Brasil)</span>
          <span>العربية</span>
        </div>
      </div>
      <div className="text-center d-flex align-items-center gap-2">
        <span style={{ fontSize: '10px' }}>About </span>
        <span style={{ fontSize: '10px' }}>· Help</span>
        <span style={{ fontSize: '10px' }}>· More</span>
      </div>
    </div>
  );
}

export default Log;
