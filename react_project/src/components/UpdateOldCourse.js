import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateOldCourse = () => {
    const {id} = useParams();
    let history = useHistory();
    <h1> UPDATE RECORD </h1>
    useEffect(()=>{
        //alert("testing");
        document.title="UPDATE A COURSE || RAMAN MALIK"
        //alert(id);
        loadUser();
        
    },[]);

    const [course, setCourse]= useState({
    });

    //const [title,description] = course;
    // form handler function

    const handleForm= async (e)=>{
        console.log(course);
        await postDatatoServer(course);
        e.preventDefault();
        history.push("/view-courses");
        
    }

    // creatimg function to post data on server
    const postDatatoServer=(data)=>
    {
        axios.put(`${base_url}/courses/${id}`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Record Updated")      
        },
            (error) => {
            console.log(error);
            })
    };
    // LOADING A COURSE
    const loadUser = async () =>{
    const result = await axios.get(`${base_url}/courses/${id}`);
    console.log(result.data);
    setCourse(result.data);
}
    return (

       
<Fragment>         
                <Form onSubmit={handleForm}>

                    <FormGroup>
                        <Label for="id">Id</Label>
                        <Input disabled value={id} type="text" name="id" id="ID" onChange={(e)=>{
                            setCourse({...course, id: e.target.value});}} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="title">TITLE</Label>
                        <Input value={course.title} type="text" name="title" id="title" placeholder="Enter Title Here!" 
                        onChange={(e)=>{
                            setCourse({...course, title: e.target.value});
                        }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input value={course.description} type="textarea" name="description" id="description" onChange={(e)=>{
                            setCourse({...course, description: e.target.value});
                        }}/>
                    </FormGroup>
            
                    <Button type="submit">Update</Button> 
                </Form>
             </Fragment>

    )
}

export default UpdateOldCourse;