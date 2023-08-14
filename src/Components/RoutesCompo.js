import React from 'react';
import Home from './Home';
import Student from './Student';
import ContactUs from './ContactUs';
import { Route, Routes} from 'react-router-dom';
import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent';

const RoutesCompo = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/addnewstudent" element={<AddNewStudent/>}/>
        <Route path="/editstudent" element={<EditStudent/>}/>
    </Routes>
  )
}

export default RoutesCompo;