import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const StudentData = () => {
  const navigate = useNavigate();
  const data = useSelector((state)=>state.Student);
  console.log(data);
  return (
          <div className='box'>
            <table className='table'>
                  <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                  </thead>
                  <tbody>
                      {
                        data.map((item,index)=>{
                          return(
                              <tr key={index}>
                                  <td>{item.Name}</td>
                                  <td>{item.Age}</td>
                                  <td>{item.Course}</td>
                                  <td>{item.Batch}</td>
                                  <td><button type='button' className='edit' onClick={()=>{ const id =item.id; navigate('/editstudent', {state:id})}}>Edit</button></td>
                              </tr>
                          )
                      }
                    )}
                  </tbody>
            </table>
          </div>
  )}

export default StudentData;