import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function BenifitsCard(props) {
  return (
    <div className="benifits-card mt-5 mb-5">
      <Container>
        <Row>
          <Col md={6} className="p-0">
            <div className="benifits-content d-flex align-items-left justify-content-center">
              <h2 className="title-small">{props.title}</h2>
              <hr/>
              <ul>
                {props.benifitsList.lists.map((ele, index) => (
                  <li key={ele.id}>{ele.benifit}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <img
              src={require(`../../assets/img/${props.benifitsList.image}`)}
              alt="I And You"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
