import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/vaishnavi2.jpeg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vaishnavi Pande</strong>
              </h1>

              <p className="heading-description blockquote">
              Passionate about creating exceptional digital experiences, I specialize in front-end 
              and back-end development, database management, and problem-solving. With a keen eye for clean,
              efficient code, I build dynamic, scalable web applications that drive performance and innovation.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={6}>
              <img src="{myImg}" className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
