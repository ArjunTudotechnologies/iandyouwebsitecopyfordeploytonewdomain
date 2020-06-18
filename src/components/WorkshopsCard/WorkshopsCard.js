import React from "react";
import { Card, Button } from "react-bootstrap";
import Banner1 from "../../assets/img/banners/banner-1.jpg";
import { MdPlace } from "react-icons/md";

export default function WorkshopsCard(props) {
  return (
    <>
      <Card className="events-card workshop-card m-3 wow fadeInUp">
        <Card.Img variant="top" src={Banner1} />
        <Card.Body className="position-relative">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <span className="text-right">
            <Button variant="primary">Register</Button>
          </span>
          <span className="pl-2 text-left">
            <MdPlace />
            {props.location}
          </span>
        </Card.Body>
      </Card>
    </>
  );
}
