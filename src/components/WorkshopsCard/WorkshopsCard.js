import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdPlace, MdDateRange } from "react-icons/md";

export default function WorkshopsCard(props) {
  return (
    <>
      <Card className="events-card workshop-card m-3 wow fadeInUp">
        <Link to={props.link}>
          <Card.Img
            variant="top"
            className="eventCardImg"
            src={process.env.PUBLIC_URL + "img/workshop/" + props.image}
          />
        </Link>
        <Card.Body className="position-relative">
          <Link className="linkTitle" to={props.link}>
            <Card.Title>{props.title}</Card.Title>
          </Link>
          <Link className="linkText" to={props.link}>
            <Card.Text className="textMinimum mb-3">{props.desc}</Card.Text>
          </Link>
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
