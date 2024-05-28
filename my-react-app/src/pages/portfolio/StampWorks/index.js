import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../../content_option";
import { Container, Row, Col } from "react-bootstrap";

export const StampWorks = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>StampWorks | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
                <h1 className="display-4 mb-4">StampWorks</h1>
                <p>NEF StampWorks is a digital solution developed as part of a project with the Department of Work and Pensions digital team to streamline the management of student reward points.<br></br>This project serves as a testament to my web skills, showcasing my ability to create content from scratch based on set goals and specifications, along with the use of industry standard production workflows and methods.</p>
            </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <h2 className="display-4 mb-4">What's Under the Hood?</h2>
        <h3 className="display-4 mb-4">Frontend</h3>
        <p>Utilizing HTML, CSS, and JavaScript, I crafted a user-friendly interface for StampWorks. The design prioritizes usability and accessibility, ensuring a seamless experience for administrators and students. The responsive design adapts seamlessly to various devices and screen sizes, demonstrating my proficiency in basic frontend development.</p>
        <img src="" alt="A section of code from the 'index.html' file in StampWorks" />
      </Container>
    </HelmetProvider>
  );
};
