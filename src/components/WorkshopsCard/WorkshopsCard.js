import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";

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
