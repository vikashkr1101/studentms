import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../index.css';
function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/get_student/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="container-fluid vw-100 vh-100">
        <h1>----------Read Student Details---------- </h1>
      <h2 style={{ backgroundColor:'aqua', height: '3rem',width:'20%',borderRadius: '10px',marginLeft: '604px',paddingLeft: '87px' }}>Student - {id}</h2>
      <div  style={{marginBottom: '8px'}}>
      <Link to="/home" className="btn btn-success">Back</Link>
      </div>
      {data.map((student) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {student["id"]}
            </li>
            <li className="list-group-item">
              <b>Name: </b>
              {student["name"]}
            </li>
            <li className="list-group-item">
              <b>Email: </b>
              {student["email"]}
            </li>
            <li className="list-group-item">
              <b>Age: </b>
              {student["age"]}
            </li>
            <li className="list-group-item">
              <b>Gender: </b>
              {student["gender"]}
            </li>
          </ul>
        );
      })}
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
}

export default Read;