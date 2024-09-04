import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../index.css';
function Edit() {
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

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`/edit_user/${id}`, data[0])
      .then((res) => {
        alert('Deatils updated successfully!');
        navigate("/home");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-fluid vw-100 vh-100">
        <h1>----------Edit Student Details---------- </h1>
        <center>
        <h2 style={{ backgroundColor:'aqua', height: '3rem',width:'20%',borderRadius: '10px',marginLeft: '10px',paddingLeft: '3px' }}>Student - {id}</h2>
        </center>
      <div style={{marginBottom: '8px'}}>
      <Link to="/home" className="btn btn-success">
        Back
      </Link><br />
      </div>
      {data.map((student) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3"  style={{marginLeft:'450px'}}>
              <label htmlFor="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name : &nbsp;</label>
              <input
                value={student.name}
                type="text"
                name="name"
                required
                onChange={(e) =>
                  setData([{ ...data[0], name: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3" style={{marginLeft:'450px'}}>
              <label htmlFor="email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email : &nbsp;</label>
              <input
                value={student.email}
                type="email"
                name="email"
                required
                onChange={(e) =>
                  setData([{ ...data[0], email: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3" style={{marginLeft:'450px'}}>
              <label htmlFor="gender">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gender : </label>
              <input
                value={student.gender}
                type="text"
                name="gender"
                required
                onChange={(e) =>
                  setData([{ ...data[0], gender: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3" style={{marginLeft:'450px'}}>
              <label htmlFor="age">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                value={student.age}
                type="number"
                name="age"
                required
                onChange={(e) => setData([{ ...data[0], age: e.target.value }])}
              />
            </div>
            <div className="form-group my-3 submit_btn"  style={{marginLeft:'730px'}}>
              <button type="submit" className="btn btn-success"> Save&nbsp; </button>
            </div>
          </form>
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

export default Edit;