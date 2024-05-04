import React, { Component, Fragment } from 'react';
import '../../asset/css/bootstrap.min.css';
import business3 from '../../asset/images/photo-1.jpeg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../asset/css/style.css';

class AllCourse extends Component {
     render() {
          return (
               <Fragment>


<section  className="min-Course ">

<Container className=' mt-5'>


      
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
              <Card.Title >Card Title</Card.Title>
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
          );
     }
}

export default AllCourse;