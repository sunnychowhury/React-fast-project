import React, { Component } from 'react';
import { Container, Row, Col, Button  } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../asset/css/style.css';

class Forms extends Component {
     render() {
          return (

             
                    <Fragment>
                      <Container className='Forms'>
                        
                         <Row>
                            <Col>
                            
                            <h3>Quick Contact</h3>
                          <Form.Label className='FormsHeader mt-3'>Name</Form.Label>
                          <Form.Control className='pt-3' placeholder="" />
                          <Form.Label className='FormsHeader mt-3'>Email address</Form.Label>
                         <Form.Control className='pt-3' placeholder="" />
                         <Form.Label className='FormsHeader mt-3'>Your Message</Form.Label>
                         <Form.Control className='p-5' placeholder="" />
                         <Button className='mt-3' variant="primary">Submit</Button>
                         
                         </Col>
                         
                        </Row>
                       
                      </Container>  
                    </Fragment>

          );
     }
}

export default Forms;