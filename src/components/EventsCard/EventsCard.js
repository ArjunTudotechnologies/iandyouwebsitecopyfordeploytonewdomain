import React from "react";
import { Card, Button } from "react-bootstrap";
import Banner1 from "../../assets/img/banners/banner-1.jpg";
import { MdPlace, MdDateRange } from "react-icons/md";

export default function EventsCard(props) {
  return (
    <>
      <Card className="events-card m-3 mb-4 wow fadeInUp">
        <Card.Img variant="top" src={Banner1} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <span className="text-left">
            <MdDateRange />
            {props.date}
          </span>
          <span className="text-right pl-2">
            <MdPlace />
            {props.location}
          </span>
          <span className="text-right"></span>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Register</Button>
        </Card.Footer>
      </Card>
    </>
  );
}
