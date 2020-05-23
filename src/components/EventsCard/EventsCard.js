import React from "react";
import { Card, Button } from "react-bootstrap";
import Banner1 from "../../assets/img/banners/banner-1.jpg";

export default function EventsCard(props) {
  return (
    <>
      <Card className="events-card m-3 wow fadeInUp">
        <Card.Img variant="top" src={Banner1} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Button variant="primary">Register</Button>
        </Card.Body>
      </Card>
    </>
  );
}
