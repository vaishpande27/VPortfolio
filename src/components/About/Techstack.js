import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating"

function Techstack(props) {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       <Col className="skill-name" xs={4}>
        <ul>
          <li>{props.name}</li></ul>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
