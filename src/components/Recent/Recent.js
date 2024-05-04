import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button  } from 'react-bootstrap';
import '../../asset/css/style.css';
import '../../asset/css/bootstrap.min.css';
import business from '../../asset/images/Business-management-5-strategies-to-grow-the-company-2.jpg';
import business2 from '../../asset/images/photo-1.jpeg';
import business1 from '../../asset/images/photo-2.jpeg';

 class Recent extends Component {
  render() {
    return (
     <Fragment>
         <section  className="min-service mt-5">

       <Container className=' mt-5'>
          
       <div class="common-heading mt-5">
            <h2 class="text-center "> RECENT PROJECT</h2>
            <p class="text-center">This list of great business ideas offers inspiration to entrepreneurs</p>
           <div class="orange-underline m-auto"></div>
        </div>
             
        <Row className='mt-5 text-center'>
               
                <Col lg={4} md={6} sm={12}>                    
               
               <Card className='service-card py-4 px-3 mt-5 '>
               <img src={business} alt=""></img>
               <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
               Some quick example text to build on the card title and make up the
               </Card.Text>
               <Button variant="primary">Click Me</Button>
               </Card.Body>
               </Card>
                    
                    </Col>
               
                    <Col lg={4} md={6} sm={12}>                    
               
               <Card className='service-card py-4 px-3 mt-5 '>
               <img src={business} alt=""></img>
               <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
               Some quick example text to build on the card title and make up the
               </Card.Text>
               <Button variant="primary">Click Me</Button>
               </Card.Body>
               </Card>
               
               </Col>
               

               <Col lg={4} md={6} sm={12}>                    
               
               <Card className='service-card py-4 px-3 mt-5'>
               <img src={business1} alt=""></img>
               <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
               Some quick example text to build on the card title and make up the
               
               </Card.Text>
               <Button variant="primary">Click Me</Button>
               </Card.Body>
               </Card>
               
               </Col>
               
               </Row>
              </Container>


     </section>
     
     
     </Fragment>

    )
  }
}


export default Recent;