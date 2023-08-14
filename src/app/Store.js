import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../Features/StudentSlice";

export default configureStore({
reducer:{
    Student:StudentSlice
}

})