import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig, socialprofils } from "../../content_option";
import {
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <h1 className="display-4 mb-4">Contact Me</h1>
        <hr className="t_border my-4 ml-0 text-left" />
        <h3 className="color_sec py-4">Get in touch</h3>
        <p>{contactConfig.description}</p>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <a href={socialprofils.email}><FaEnvelope /></a>  Email me at <a href={socialprofils.email}>jack@jacklowe.dev</a><br></br>
            <a href={socialprofils.linkedin}><FaLinkedin /></a>  Message me on <a href={socialprofils.linkedin}>LinkedIn</a><br></br>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
)}