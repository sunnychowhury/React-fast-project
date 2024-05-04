import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import team1 from '../../asset/images/team-1.jpg';
import team2 from '../../asset/images/team-2.jpg';
import team3 from '../../asset/images/team-3.jpg';
import team4 from '../../asset/images/team-4.jpg';
class ClientReview extends Component {
     render() {


          var settings = {
               AutoPlaySpeed: 3000,
               AutoPlay:true,

               dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 4000,
                cssEase: "linear"
             };

          return (
               <Fragment>
                    <div className='min-client'>
                    <p className='Title  text-center'>CLIENT SAYS</p>
                   
                    <Container>
                      
                         <Slider {...settings}>

                         <Row className='text-center'>
                         
                         <Col>
                               

                               <img className='ClientImage ' src={team1} alt=""  />
                               <h1 className='mt-2'>Web Developer</h1>
                               <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                               
                               
                               </Col>


                         </Row>
                         <Row className='text-center'>
                              <Col>
                              <h3></h3>
                              <img className='ClientImage' src={team2} alt=""  />
                              <h1 className='mt-2'>App Developer</h1>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                              
                              
                              </Col>


                         </Row>

                         <Row className='text-center 'style={{ width: "3rem" }}>
                              <Col>
                              
                              <img className='ClientImage ' src={team3} alt=""  />
                              <h1 className='mt-2'>Software Developer</h1>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                              
                              
                              </Col>


                         </Row>

                         <Row className='text-center'>
                              <Col>
                              
                              <img className='ClientImage ' src={team4} alt=""  />
                              <h1 className='mt-2'>Software Engineer</h1>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                              
                              
                              </Col>


                         </Row>



                         </Slider>
                    </Container>

                    </div>

               </Fragment>
 
             );
     }
}

export default ClientReview;