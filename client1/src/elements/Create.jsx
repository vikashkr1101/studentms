import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import '../index.css';
function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    })

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/add_user', values)
        .then((res)=>{
            alert('New stuudent added successfully!');
            navigate('/home')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container vh-100 vw-100'>
        <div className='row form'>
            <h1>----------Add Student----------</h1>
            <div className='d-flex justify-content-end hm_btn'  style={{marginBottom: '8px'}}>
                <Link to='/home' class='btn btn-success'>Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                
                <div className='form-group my-3'>
                    <label htmlFor='name'>Name : &nbsp;</label>
                    <input type='text' name='name' required onChange={(e)=> setValues({...values, name: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='email'>Email : &nbsp;&nbsp;</label>
                    <input type='email' name='email' required onChange={(e)=> setValues({...values, email: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='age'>Age : &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type='number' name='age' required onChange={(e)=> setValues({...values, age: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='gender'>Gender : </label>
                    <input type='text' name='gender' required onChange={(e)=> setValues({...values, gender: e.target.value})} />
                </div>
                
                <div className='form-group my-3 submit_btn'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
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
  )
}

export default Create