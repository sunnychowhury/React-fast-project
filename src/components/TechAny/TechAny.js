import React, { Component, Fragment } from 'react'
import { Col, Container, Card, Row } from 'react-bootstrap'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, } from 'recharts';


export default class TechAny extends Component {

  constructor(){
    super();
    this.state={
      data:[
        {Technology: 'Java', project: 100},
        {Technology: 'Kotlin', project: 70},
        {Technology: 'Sql', project: 90},
        {Technology: 'Jquery', project: 80},
        {Technology: 'React', project: 75},
        {Technology: 'PHP', project: 85},
        {Technology: 'Angular', project: 56},
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
        <div class="common-heading mt-5">
            <h2 class="text-center mt-5">Technology Used</h2>
            <p class="text-center">Check out the great services we offer</p>
           <div class="orange-underline m-auto"></div>

        </div>
        <br/><br/>
          <Row className='mt-5'>
            <Col lg={6} md={6} sm={12}>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={this.state.data}>
                  <XAxis dataKey="Technology"/>
                  <Tooltip/>
                  <Bar dataKey="project" fill="blue"/>
                </BarChart>
              </ResponsiveContainer>
            </Col>
          
            <Col lg={6} md={6} sm={12}>
                        <p className='chat-bar-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        software like Al dus PageMaker including versions of Lorem Ipsum.</p>

                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p> 
                     
                    <p>  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po sed in the 1960s with the release of Let ra set sheets containing Lorem Ipsum passages, and more recently with desktop publishing  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,   </p>
                        
             </Col>
             
                
    
          </Row>
          
          


        </Container>
      </Fragment>
    )
  }
}