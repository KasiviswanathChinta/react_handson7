import StudentData from './StudentData';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Student = () => {
   const navigate = useNavigate();
  return (
    <div>
        <h1 className='heading'>Student's Details</h1>
        <button className='button' type="button" onClick={()=>navigate('/addnewstudent')}>Add New Student</button>
        <div>
            <StudentData/>
        </div>
    </div>
  )
}

export default Student;