import React, { Component, Fragment } from 'react';
import '../../asset/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button  } from 'react-bootstrap';
import business from '../../asset/images/Business-management-5-strategies-to-grow-the-company-2.jpg';
import business2 from '../../asset/images/photo-1.jpeg';
import business1 from '../../asset/images/photo-2.jpeg';
import '../../asset/css/style.css';

class Project extends Component {
     render() {
          return (
               <Fragment>
                    <section>
          <Container fluid className="top-header  p-0">
            <div className="top-overlay">
              <Container className="Top">
                <Row>
                  <Col className="text-center ">
                    <h1 className="Top-title">All Project</h1>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </section>
                    
                    <section  className="min-service mt-5">

               <Container className=' mt-5'>
                  
                     
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
               <img src={business2} alt=""></img>
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
          );
     }
}

export default Project;