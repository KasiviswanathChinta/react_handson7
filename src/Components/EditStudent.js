import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EditedStudent } from '../Features/StudentSlice';
import { useDispatch } from 'react-redux';
import '../App.css';

const EditStudent = () => {
    const dispatch = useDispatch();
    const data = useLocation();
    const StudentId = data.state;
    console.log(StudentId);
    const StdData = useSelector((state)=>state.Student.filter((item)=>item.id===StudentId))
    const {Name,Age,Course,Batch} = StdData[0];

    const navigate = useNavigate();
    const [newName, setName] = useState(Name)
    const [newAge, setAge] = useState(Age)
    const [newBatch, setBatch] = useState(Batch)
    const [newCourse, setCourse] = useState(Course)

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(EditedStudent({
            id:StudentId,
            newName,
            newAge,
            newCourse,
            newBatch
        }))
        navigate('/student')
    }

    const handleCancel = () =>{
        navigate('/student');
     }

  return (
    <>
    <h1 className='heading'>Edit Student</h1>
    <center>
        <form>
            <div className='input-box'>
              <input type='text' value={newName} onChange={(e)=>setName(e.target.value)}/>
              <input type='number' value={newAge} onChange={(e)=>setAge(e.target.value)}/>
              <input type='text' value={newCourse} onChange={(e)=>setCourse(e.target.value)}/>
              <input type='text' value={newBatch} onChange={(e)=>setBatch(e.target.value)}/>
            </div>
            <button type='button' className='btn1 btn' onClick={handleCancel}>Cancel</button>
            <button type='submit' className='btn2 btn' onClick={handleUpdate}>Update</button>
        </form> 
     </center>
    </>
  )
}

export default EditStudent;