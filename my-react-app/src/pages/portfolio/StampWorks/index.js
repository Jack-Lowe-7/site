import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../../content_option";
import "./style.css";

export const StampWorks = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>StampWorks | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center text-center align-items-stretch">
          <Col lg="11">
            <h1 className="display-4 mb-4">StampWorks</h1>
            <p>
              NEF StampWorks is a digital solution developed as part of a project with the Department of Work and Pensions digital team to streamline the management of student reward points.
              <br />
              This project serves as a testament to my web skills, showcasing my ability to create content from scratch based on set goals and specifications, along with the use of industry-standard production workflows and methods.
            </p>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center text-center align-items-stretch">
          <Col lg="11">
            <h2 className="display-4 mb-4">What's Under the Hood?</h2>
            <h3 className="display-4 mb-4">Frontend</h3>
            <p>
              Utilizing HTML, CSS, and JavaScript, I crafted a user-friendly interface for StampWorks. The design prioritizes usability and accessibility, ensuring a seamless experience for administrators and students. The responsive design adapts seamlessly to various devices and screen sizes, demonstrating my proficiency in basic frontend development.
            </p>
            <img src="https://raw.githubusercontent.com/Jack-Lowe-7/site/main/my-react-app/src/assets/images/StampWorks/StampWorks%20index.html.jpeg" alt="A section of code from the 'index.html' file in StampWorks" className="img-fluid" />
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center text-center align-items-stretch">
          <Col lg="6" className="d-flex justify-content-center">
            <img src="https://raw.githubusercontent.com/Jack-Lowe-7/site/main/my-react-app/src/assets/images/StampWorks/StampWorks%20app.py.jpeg" alt="Flask Routing Diagram" className="img-fluid backend-image" />
          </Col>
          <Col lg="5">
            <h3 className="display-4 mb-4">Backend</h3>
            <h4>Flask Routing</h4>
            <p>
              The backend routing mechanisms were implemented using the Flask web framework. Flask's lightweight architecture allowed for efficient handling of incoming requests and dynamic content delivery. The routing system ensures smooth navigation and efficient data flow throughout the application, demonstrating a basic grasp of backend development. 
            </p>
            <h4>Database</h4>
            <p>
              StampWorks utilizes Python's built-in SQLite3 module for database management. This lightweight RDBMS ensures data integrity and scalability for storing and organizing student reward points data. The integration with Flask's server architecture provides a seamless end-to-end solution, showcasing my ability to design and implement robust backend infrastructures.
            </p>
            <img src="https://raw.githubusercontent.com/Jack-Lowe-7/site/main/my-react-app/src/assets/images/StampWorks/table.jpg" alt="Database Schema" className="img-fluid" />
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center text-center align-items-stretch">
          <Col lg="8">
            <h2 className="display-4 mb-4">Summary</h2>
            <p>
              StampWorks has provided me with a valuable learning experience in web development, especially in collaborating with massive organizations like the Department of Work and Pensions. While I'm still learning and improving, this project does a fantastic job of showcasing my commitment to growth and my eagerness to push myself and take part in optional projects.
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
