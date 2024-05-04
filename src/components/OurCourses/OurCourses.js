import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card,   } from 'react-bootstrap';
import '../../asset/css/style.css';
import business from '../../asset/images/Business-management-5-strategies-to-grow-the-company-2.jpg';
import business3 from '../../asset/images/photo-1.jpeg';

 class OurCourses extends Component {
  render() {
    return (
      <Fragment>
 <section  className="min-service ">

<Container className=' mt-5'>

<div class="common-heading ">
            <h2 class="text-center ">Our Courses</h2>
            <p class="text-center">This list of great business ideas offers inspiration to entrepreneurs</p>
           <div class="orange-underline m-auto"></div>
        </div>
      
       <Row className='mt-5 text-center'>

       <Col lg={3} md={6} sm={12}>                    
             
             <Card className=' mt-3 Course-img'>
             <img src={business3} alt=""></img>
           </Card >
                      
                      </Col>
         
                      <Col lg={3} md={6} sm={12}>   
         
              <Card.Body className='CourseTitle mt-3'>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              </Card.Text>
               <p>it to make a type specimen book.</p>
               <p>it to make a type specimen book.</p>
               
              
              </Card.Body>
              <p className='CourseDetails'>Details</p>
              
                    
                    </Col>
         
                      <Col lg={3} md={6} sm={12}>                    
                     
             <Card className=' mt-3 Course-img '>
             <img src={business3} alt=""></img>
           </Card >
                      
            </Col>
         
            <Col lg={3} md={6} sm={12}>                    
              
         
              <Card.Body className='CourseTitle mt-3'>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              </Card.Text>
               <p>it to make a type specimen book.</p>
               <p>it to make a type specimen book.</p>
               
              </Card.Body>
              <p className='CourseDetails'>Details</p>
                    
                    </Col>
         
         
            
         
         <Col lg={3} md={6} sm={12}>                    
               
         <Card className=' mt-3 Course-img' >
         <img src={business3} alt=""></img>
         </Card>
               
               </Col>
         
               <Col lg={3} md={6} sm={12}>                    
              
         
         <Card.Body className='CourseTitle mt-3'>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
         </Card.Text>
              <p>it to make a type specimen book.</p>
              <p>it to make a type specimen book.</p>
               
         </Card.Body>
         <p className='CourseDetails'>Details</p>
               
               </Col>
         
               <Col lg={3} md={6} sm={12}>                    
              
         <Card className=' mt-3 Course-img'>
         <img src={business3} alt=""></img>
         </Card>
               
         </Col>
         
         <Col  lg={3} md={6} sm={12}>                    
              
         
              <Card.Body className='CourseTitle mt-3'>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              </Card.Text>
               <p>it to make a type specimen book.</p>
               <p>it to make a type specimen book.</p>
               
              </Card.Body>
              <p className='CourseDetails'>Details</p>
                    
                    </Col>
       </Row>
       </Container>


</section>

      </Fragment>


    )
  }
}

export default OurCourses;