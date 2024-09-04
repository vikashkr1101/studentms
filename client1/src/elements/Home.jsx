import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
function Home() {
    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)
    useEffect(()=>{
        if(deleted){
            setDeleted(false)
        axios.get('/students')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))
    }
    const handleLogout = () => {
        // Perform logout actions here (clear session, etc.)
        // For example, you can clear the session storage
        sessionStorage.removeItem('isLoggedIn');
      };
  return (
    <div className='container-fluid vh-100 vw-100'>
        <center>
        <h1>----------Student Management System---------- </h1>
            <h2 style={{ backgroundColor:'aqua', height: '3rem',width:'30%',borderRadius: '10px' }}>-----Admin-----</h2>
       
        <div className='d-flex justify-content-end'  style={{marginBottom: '8px'}}>
      
            <Link className='btn btn-success' to='/create'>Add Student</Link>     
            &nbsp; &nbsp;
            <Link className='btn btn-success' to="/" onClick={handleLogout}>Logout</Link>
        </div>
        <br />
        <h4 style={{ backgroundColor:'aqua', height: '2.5rem',width:'15%',borderRadius: '10px',borderBottom:'1px solid black' }}>Students List</h4>
        <table>
     
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                        Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student)=>{
                        return (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <Link className='btn mx-2 btn-success' to={`/read/${student.id}`}>Read</Link>
                                <Link className='btn mx-2 btn-success' to={`/edit/${student.id}`}>Edit</Link>
                                <button onClick={()=>handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </center>
        <footer className='footer' style={{ textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px 0' ,position: 'fixed',
    bottom: '0',
    borderRadius: '15px',   
    width: '98%',                 
    height: '4rem'
 }}>
      <p>Copyright © 2024 Student Management System. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Home
