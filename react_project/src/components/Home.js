import React, { useEffect } from 'react'
import { Jumbotron,Container } from 'reactstrap';
const Home=() =>{

    useEffect(()=>{
        //alert("testing");
        document.title="HOME || RAMAN MALIK"
    },[]);
    return <div>
        <Jumbotron className="text-center bg-primary">
            <Container >
            <h1> LearnCodewith RAMAN</h1>
            <p> asf asdf asdf asdf asdf asdfas asdfasdf asdfasdf </p>
            </Container>
        </Jumbotron>
    </div>;

}
export default Home;
