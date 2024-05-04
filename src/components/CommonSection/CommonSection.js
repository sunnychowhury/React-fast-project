
import React, { Component, Fragment } from "react";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/style.css";
import { Container, Row, Col } from "react-bootstrap";
class CommonSection extends Component {
     render() {
          return (
               <>
                    <section>
          <Container fluid className="top-header  p-0">
            <div className="top-overlay">
              <Container className="Top">
                <Row>
                  <Col className="text-center ">
                    <h1 className="Top-title"></h1>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </section>
               </>
          );
     }
}

export default CommonSection;