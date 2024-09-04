import React, { useState } from 'react';
// import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin') {
      setError('');
      const message = "Login Successful!\nWelcome Admin"; 
      alert(message);
      navigate('/home'); // Redirect to /home route on successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container-fluid vh-100 vw-100">
        <div className="form">
        <center>
      <h1>----------Student Management System---------- </h1>
            <h2 style={{ backgroundColor:'aqua', height: '3rem',width:'30%',borderRadius: '10px' }} >-----Admin Login-----</h2>
            <br /><br />br
            </center>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}  style={{ marginLeft:'78px', width: '90%'}}>
        <div className="form-group my-3 form">
          <label>Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group my-3">
          <label>Password :</label>
          <input
            type="password"
            value={password}
           
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary submit_btn"  style={{ marginLeft:'632px'}}>Login</button>
      </form>
      </div>
      <footer className='footer' style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px 0' ,position: 'fixed',
    bottom: '0',
    borderRadius: '15px',   
    width: '98%',                 
    height: '4rem'
 }}>
      <p>Copyright © 2024 Student Management System. All rights reserved.</p>
    </footer>
    
    </div>
  );
};

export default Dashboard;
