import React from "react";
import { Link } from "react-router-dom";
import { ListGroup} from "reactstrap" ;

const menu=()=>{

    return (
<ListGroup flush>
      <Link className="list-group-item list-group-item-action"tag="a" to="/">Home</Link>
      <Link className="list-group-item list-group-item-action"tag="a" to="/view-courses">All Courses</Link>
      <Link className="list-group-item list-group-item-action"tag="a" to ="/add-course">Add Courses</Link>
      <Link className="list-group-item list-group-item-action"tag="a" to ="/update-course">Search a Courses</Link>
      <Link className="list-group-item list-group-item-action"tag="a" to ="#">About</Link>
      <Link className="list-group-item list-group-item-action"tag="a" to="#">Content</Link>
</ListGroup>
    )
}

export default menu;
