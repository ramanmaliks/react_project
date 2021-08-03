import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { useHistory } from "react-router-dom";
const AddCourse=()=>{
    let history = useHistory();
    useEffect(()=>{
        //alert("testing");
        document.title="ADD A COURSE || RAMAN MALIK"
    },[]);
    const [course, setCourse]= useState({});
    // form handler function
    const handleForm= async (e)=>{
        console.log(course);
        await postDatatoServer(course);
        e.preventDefault();
        history.push('/')
        


    }

    // creatimg function to post data on server
    const postDatatoServer=(data)=>
    {
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);

            
        
    },
    (error) => {
        console.log(error);
    })

};

    return (

       

<Fragment>         
                <Form onSubmit={handleForm}>

                    <FormGroup>
                        <Label for="id">Id</Label>
                        <Input type="hidden" name="id" id="ID"  />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="title">TITLE</Label>
                        <Input type="text" name="title" id="title" placeholder="Enter Title Here!" 
                        onChange={(e)=>{
                            setCourse({...course, title: e.target.value});
                        }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" onChange={(e)=>{
                            setCourse({...course, description: e.target.value});
                        }}/>
                    </FormGroup>
            
                    <Button type="submit">Submit</Button> <Button type="Reset">Clear</Button>
                </Form>
             </Fragment>

    )
}

export default AddCourse;