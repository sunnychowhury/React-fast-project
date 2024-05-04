import React, { Component, Fragment } from "react";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineSkype } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

class About extends Component {
  render() {
    return (
      <Fragment>
        

        <section>
          <Fragment>
            <Container>
              <Row className="About mt-5">
                <Col>
                  <h2 className="AboutTitle mt-5">Who I AM</h2>
                  <p className="AboutTitle mt-4">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before the final copy is available.In publishing and graphic
                    design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before the final copy is available.
                  </p>

                  <h2>My Mission</h2>
                  <p className="AboutTitle mt-5">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before the final copy is available.In publishing and graphic
                    design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before the final copy is available.In
                    publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a
                    document or a typeface without relying on meaningful
                    content. Lorem ipsum may be used as a placeholder before the
                    final copy is available.
                  </p>

                  <h2>My Vision</h2>
                  <p className="AboutTitle mt-5">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before the final copy is available.In publishing and graphic
                    design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before the final copy is available.
                  </p>
                </Col>
              </Row>
            </Container>
          </Fragment>
        </section>
      </Fragment>
    );
  }
}

export default About;
