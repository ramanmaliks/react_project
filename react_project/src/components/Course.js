import axios from "axios";
import React from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Course=({ course, update })=>{
const deleteCourse=(id)=>{
  axios.delete(`${base_url}/courses/${id}`).then(
    
  (response)=>{
    toast.warning("Course deleted");
    update(id);
  
  }, 
  (error)=>{
    toast.error("Something went wrong")
  }
  )


}

// // Updating a record
// const updateOldCourse=(course)=>{
//   //axios.put(`${base_url}/courses/${id}`).then(
//     axios.post(`/update-course/${course.id}`).then(
//   (response)=>{
//     console.log(response.data);
//     toast.success("Course updated");
//     //update(id);
  
//   }, 
//   (error)=>{
//     toast.error("Something went wrong")
    
//   }
//   )
// }

return(

        // <Table striped width="100%">
        // <tbody>
            <tr>
              <th >{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td><button onClick={()=>{deleteCourse(course.id);}}> Delete </button> 
              {/* <Button onClick={()=>{updateOldCourse(course);}}> Update </Button></td>  */}
                <Link class="btn btn-outline-primary mr-1" to={`/update-course/${course.id}`} > Update </Link> </td>          
            </tr>
        //     </tbody>
        // </Table>

        // <Card>
        //     <CardBody>
        //         <CardTitle className="font-weight-bold bg-primary">{course.title}</CardTitle>
        //         <CardText>{course.description}</CardText>
        //         <Container className="text-center">
        //             <Button color="warning" >Delete</Button>
        //             <Button color="danger">Update</Button>
        //         </Container>
        //     </CardBody>
        // </Card>
 )
       
}

export default Course;
