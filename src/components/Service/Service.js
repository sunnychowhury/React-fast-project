import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button  } from 'react-bootstrap';
import '../../asset/css/style.css';
import business from '../../asset/images/icon1.jpeg';
import business2 from '../../asset/images/icon2.jpeg';
import business1 from '../../asset/images/icon3.jpeg';

 class Service extends Component {
  render() {
    return (
     <Fragment>


         <section  className="min-service mt-5 ">

       <Container className=' mt-5'>
          
       <div class="common-heading mt-5">
            <h2 class="text-center mt-3">service</h2>
            <p class="text-center">Check out the great services we offer</p>
           <div class="orange-underline m-auto"></div>
           </div>

              <Row className='mt-5 text-center'>

              <Col lg={4} md={6} sm={12}>                    
                    
           <Card style={{ width: "23rem" }} className='service-card py-4 px-3 mt-5 with-20px'>
           <img src={business} alt=""></img>
           <Card.Body>
             <Card.Title>Web Developer</Card.Title>
             <Card.Text>
             Some quick example text to build on the card title and make up the
             </Card.Text>
             <Button variant="primary">Click Me</Button>
           </Card.Body>
         </Card>
                    
                    </Col>

                    <Col lg={4} md={6} sm={12}>                    
                   
           <Card style={{ width: "23rem" }} className='service-card py-4 px-3 mt-5'>
           <img src={business2} alt=""></img>
           <Card.Body>
             <Card.Title>Software Developer</Card.Title>
             <Card.Text>
             Some quick example text to build on the card title and make up the
             </Card.Text>
             <Button variant="primary">Click Me</Button>
           </Card.Body>
         </Card>
                    
                    </Col>

                    <Col lg={4} md={6} sm={12}>                    
                   
           <Card style={{ width: "23rem" }} className='service-card py-4 px-3 mt-5'>
           <img src={business1} alt=""></img>
           <Card.Body>
             <Card.Title>Mobile App Developer</Card.Title>
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


export default Service;