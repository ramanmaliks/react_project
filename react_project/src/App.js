//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
// import Header from "./components/test_Header"
import Header from "./components/Header";
import {Container, Row, Col, Card, CardBody } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
//import Course from './components/Course';
import Allcourses from './components/Allcourses' 
import Menu from './components/menu';
import AddCourse from './components/AddCourse' 
import {BrowserRouter as Router, Route} from "react-router-dom";
import UpdateOldCourse from './components/UpdateOldCourse';
function App() {
  const btnHandle = () =>{
    // toast("This is my first toast handle")
    // toast.success("Success");
    toast.error("ERROR",{
      position:"top-center",
    });
  };
  return (
    <div className="App">
      {/* <h1>This is BootStrap Components </h1> */}
      {/* <Button outline color="warning" onClick={btnHandle}  >First React Button</Button> */}
     <Header />
      <Router>
      <ToastContainer />
        <Container>
        <Row>
          <Col md={4}>
            <Card>
              <CardBody>
          
          <Menu />
              </CardBody>
            </Card>   
          </Col>
          <Col md={8}>
          <Route path="/" component={Home} exact />
          <Route path="/add-course" component={AddCourse} exact />
          <Route path="/view-courses" component={Allcourses} exact />
          <Route path="/update-course/:id" component={UpdateOldCourse} exact />
          

          {/* <Home />
          <Allcourses />   */}
          </Col>
        
        </Row>
        </Container>
      </Router>
      

      {/* <h1><Header name="RAMAN"  title="First Card" /></h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    {/* <h1><Header name="MALIK" title ="Second Card"/> </h1> */}
    </div>
  );
}

export default App;
