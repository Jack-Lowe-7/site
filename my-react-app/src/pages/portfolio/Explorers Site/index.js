import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../../content_option";
import "./style.css";

export const ExplorersSite = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>WBESU Site | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center text-center align-items-stretch">
          <Col lg="11">
            <h1 className="display-4 mb-4">Whitley Bay Explorer Scout Unit Website</h1>
            <p>
              Whilst chatting with the Group Lead Volunteer of my local Explorer Unit, we got onto the topic of computing and web design, he asked me if it was easy to make a website, and I offered to help make them one... 
              <br />
              The site is wordpress, however I wrote custom plugins in php & fully white-labelled it including modifying what a standard editor can see to keep things simple for the volunteers maintaining it. 
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
