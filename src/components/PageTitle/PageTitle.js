import React, { Component, Fragment } from 'react';
import '../../components/PageTitle/PageTitle.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../asset/css/bootstrap.min.css';
import logo from '../../asset/images/logo.png';
import { Container, Row, Col, Card, Form, Button  } from 'react-bootstrap';
import business from '../../asset/images/icon1.jpeg';
import business2 from '../../asset/images/icon2.jpeg';
import business1 from '../../asset/images/icon3.jpeg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineSkype } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


class PageTitle extends Component {
     render() {
          return (
              <Fragment>
          
               <section>


               <Container fluid className='Top-header p-0'>

<div className='Top-overlay'>
    
    <Container className='top'>
     <Row>
          <Col className='text-center '>

         <h1 className='top-title'> Get My Services</h1>
        
          
          </Col>
     </Row>
       

    </Container>
   
</div>



</Container>


               </section>


               <section  className="min-Service mt-5 ">

<Container className=' mt-5'>
   
<div class="common-heading mt-5">
     <h2 class="text-center mt-3">service</h2>
     <p class="text-center">Check out the great services we offer</p>
    <div class="orange-underline m-auto"></div>
    </div>

       <Row className='mt-5 text-center'>

       <Col lg={4} md={6} sm={12}>                    
             
    <Card style={{ width: "23rem" }} className='Service-card py-4 px-3 mt-5 with-20px'>
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

          

        <section>
              
        <div class="NewsLetter mt-5 my-5">
            <h2 class="text-center ">Join Our Newsletter</h2>
            <p class="text-center fs-5">Tame quem null quae leg multo auto sint culpa leg noster magna</p>
        
            <Form className="d-flex">

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
       
      </div>


               <Container className='Footer-Min text-center'>
               <Row>
           <Col lg={3} md={6} sm={12}>

           <h3>NineStars</h3>
           <p>A108 Adam Street 
                New York, NY 535022 
                United States
                </p>
                <p class="lh-8"><strong>Phone:</strong> +1 5589 55488 55</p>
              <p class="lh-8"><strong>Email:</strong> info@example.com</p>

              

           </Col>

           <Col lg={3} md={6} sm={12}>
               
           <h3>Useful Links</h3>
              <ul>
                <li><i class='bx bx-chevron-right mb-3'></i>Home</li>
                <li><i class='bx bx-chevron-right mb-3'></i>About us</li>
                <li><i class='bx bx-chevron-right mb-3'></i>Services</li>
                <li><i class='bx bx-chevron-right mb-3'></i>Terms of service</li>
                <li><i class='bx bx-chevron-right mb-3'></i>Privacy policy</li>
              </ul>

           </Col>

           <Col lg={3} md={6} sm={12} > 

           <h3>Our Services</h3>
              <ul>
                <li><i class='bx bx-chevron-right mb-2'></i>Web Design</li>
                <li><i class='bx bx-chevron-right mb-2'></i>Web Development</li>
                <li><i class='bx bx-chevron-right mb-2'></i>Product Management</li>
                <li><i class='bx bx-chevron-right mb-2'></i>Marketing</li>
                <li><i class='bx bx-chevron-right mb-2'></i>Graphic Design</li>
              </ul>

           </Col>

           <Col lg={3} md={6} sm={12} > 

               <h3>Our Social Networks</h3>
                <p class=" my-4">Cra ftu Audio eu fiat lie par nao tier video magna der ves</p>
                <i class=' i ' ><FaTwitter /></i>
                <i class=' i bx bxl-facebook-circle' ><FaFacebookF /></i>
                <i class=' i bx bxl-instagram' ><FaInstagram /></i>
                <i class=' i bx bxl-skype'><AiOutlineSkype /></i>
                <i class=' i bx bxl-linkedin'><FaLinkedinIn /></i>
           </Col>



           </Row>


               </Container>


             <footer class="my-5">
       <Container>
          <Row>
            <Col md-6>
              <p>© Copyright <strong>ThemeZone</strong>. All Rights Reserved</p>             
            </Col>

            <Col md-6>
              <p class="text-end">Designed by<strong> React-BootstrapMad</strong></p>
            </Col>
          </Row>
          </Container>
      </footer>



        </section>


              </Fragment>
          );
     }
}

export default PageTitle;