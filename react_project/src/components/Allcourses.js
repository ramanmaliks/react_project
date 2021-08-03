import React, { useState,useEffect } from 'react';
import Course from './Course';
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from 'react-toastify';
import {Table } from 'reactstrap';
const Allcourses=()=>{
//**********using the effect hook in react ... search on google
    useEffect(()=>{
        //alert("testing");
        document.title="All Course || RAMAN MALIK"
    },[]);

    // function to call server :
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
        (response) => {
            // axios.spread(courses) => {
            //     const use = courses.data;
            //     setCourses(use);
            // }
            // //success
            
            console.log(response);
            toast.success(" Courses Loaded")
            console.log(response.data);
            setCourses(response.data.reverse());
        },
        (error)=>{
            //for error
            console.log(error);
            toast.error("DDDDD")
        }
        );
    };

    //calling loading courses function
    useEffect(()=>{
        //alert("testing");
        getAllCoursesFromServer();
    }, []);

    const[courses, setCourses]=useState([
         //{title:"Java Course",description:"This is Java Course"},
         //{title:"Phython Course",description:"This is Phython Course"},
         //{title:"React Course",description:"This is React Course"},
        
    ]);


    // Updating list of course after deleting a course
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id !== id));
    };
    return(
        <div>
            <h1> All Course</h1>
            <h2> List of All Courses</h2>
        <Table striped width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Title</th>
            <th>Course Descrpition</th>
            <th>Delete / Update</th>
          </tr>
        </thead>
         
            {
                courses.length>0
                ? courses.map((item)=><Course key={item.id} course={item} update={updateCourses}/>) : "No Course Available"
            }
        </Table>  
        </div>
        
    )
}


export default Allcourses;