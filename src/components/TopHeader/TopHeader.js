import React, { Component, Fragment , } from 'react';
import '../../asset/css/style.css';
import { Container, Row, Col, Button, } from 'react-bootstrap';



 class TopHeader extends Component {
  render() {
    return (
     <Fragment>

          <Container fluid className='top-header p-0'>

               <div className='top-overlay'>
                   
                   <Container className='Top'>
                    <Row>
                         <Col className='text-center '>

                        <h1 className='Top-title'> Grow Your Business</h1>
                        <h4 className='Top-subtitle'>Quickly Build a Website With Our Unified Platform.</h4>
                        <Button className='Top-Button' variant="info">Join with Us</Button>{' '}  
                         
                         </Col>
                    </Row>
                      

                   </Container>
                  
               </div>

     

          </Container>

     </Fragment>
    )
  }
}
export default TopHeader;