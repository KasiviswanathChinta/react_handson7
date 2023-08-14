import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddStudent } from '../Features/StudentSlice'
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AddNewStudent = () => {
    const StudentList = useSelector((state)=>state.Student);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Batch, setBatch] = useState('')
    const [Course, setCourse] = useState('')

    const handleSubmit=(e) =>{
        e.preventDefault();
        dispatch(AddStudent({
          Id:StudentList.length,
          Name,
          Age,
          Batch,
          Course
        }));
        setName(' ');
        setAge(' ');
        setBatch(' ');
        setCourse(' ');
        navigate('/student');
    }
  return (
    <>
     <h1 className='heading'>New Student</h1>
     <center>
        <form>
          <div className='input_box'>
            <input type='text' value={Name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <input type='number' value={Age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/><br/><br/>
            <input type='text' value={Course} placeholder="Enter Course" onChange={(e)=>setCourse(e.target.value)}/>
            <input type='text' value={Batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/><br/><br/>
          </div>
            <button type='button' className='btn1 btn' onClick={()=>navigate('/student')}>Cancel</button>
            <button type='submit' className='btn2 btn' onClick={handleSubmit}>Submit</button>
        </form>
      </center> 
    </>
  )
}

export default AddNewStudent;