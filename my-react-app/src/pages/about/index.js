import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>I'm Jack, I'm currently studying Networks and Cyber Security BSc (Hons) at Northumbria University. I've just finished studying A-Levels in Computer Science, Maths & Psychology at North East Futures UTC. I'm after a career in Computer Science, more specifically in Cybersecurity.<br/><br/>Thanks to switching to the UTC I got to have some amazing opportunities such as participating in a UK wide capture the flag competition ran by the National Centre for Cybersecurity in which we took home first place!</p>
              <br/>
              <h5 className="service__title">Volenteering - The Scout Association</h5>
              <p className="service_desc">I volunteer at my local Scout group every Friday as one of the Scouts Section Team Leads and also as a Trustee. I help plan and lead sessions that boost life skills for young people in my area - from leadership, teamwork, and communication to lighting fires and building shelters and everything in between! It's a really rewarding way to give back to my community - inspiring and educating young people.<br/> <br/> I've completed extensive training on everything from safeguarding to program planning & delivery. I also hold an enhanced DBS.<br/> <br/>Through my role as Section Team Lead (Scouts) I have developed my team leadership skills alongside gaining experience in project planning and execution. Similarly, in my role as a Trustee I hold legal responsibility for the safe operation of the group in line with both our internal policy (POR) and UK Law.</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Proficiencies</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
