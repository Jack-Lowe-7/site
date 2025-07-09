import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../../content_option";
import "./style.css";

export const Site = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>This website! | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center text-center align-items-stretch">
          <Col lg="11">
            <h1 className="display-4 mb-4">My webiste</h1>
            <p>
              I made this site to show off my portfolio as I build it and to collate my proffesional information.
              <br />
              I use a modified open-source template to create this, which has served as a starting point for learning how react websites work and to improve my javascript skills.
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
