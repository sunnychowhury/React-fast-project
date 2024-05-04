import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineSkype } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


class FooterTop extends Component {
     render() {
          return (
               <Fragment>

<Container className='Footer-min text-center'>
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

           <Col lg={3} md={6} >
               
               <h3>Useful Links</h3>
                  
                    <p class='bx bx-chevron-right mb-3'> Home</p>
                    <p class='bx bx-chevron-right mb-3'> About us</p>
                    <p class='bx bx-chevron-right mb-3'> Services</p>
                    <p class='bx bx-chevron-right mb-3'> Terms of service</p>
                    <p class='bx bx-chevron-right mb-3'> Privacy policy</p>
                 
    
               </Col>
    
               <Col lg={3} md={6}  > 
    
               <h3>Our Services</h3>
                  
                    <p class=' mb-2'> Design</p>
                    <p class=' mb-2'>  Development</p>
                    <p class=' mb-2'>  Management</p>
                    <p class=' mb-2'> Marketing</p>
                    <p class=' mb-2'> Design</p>
                 
    
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



                    
               </Fragment>
          );
     }
}

export default FooterTop;