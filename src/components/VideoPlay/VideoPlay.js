import React, { Component, Fragment } from 'react'
import { Container,Row, Col, Modal,Button } from 'react-bootstrap';
import { FaCirclePlay } from "react-icons/fa6";


 class VideoPlay extends Component {
  render() {
    return (
    <Fragment>
     <Container className='text-center mt-5'> 
        <Row>

            <Col lg={12} sm={12} md={12} className='VideoCard'>
             
             <p className='VideoTitle'>How I Do </p>
             <p> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po sed in the 1960s with the release </p>
             <p> <FaCirclePlay className='PlayButton mt-3' /></p>



            </Col>
        
        </Row>
    

          
     </Container>





    </Fragment>


    )
  }
}

export default VideoPlay;