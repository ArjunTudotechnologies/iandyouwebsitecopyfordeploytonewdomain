import React from "react";
import { Card, Button } from "react-bootstrap";
import Banner1 from "../../assets/img/banners/banner-1.jpg";
import { MdPlace, MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

export default function EventsCard(props) {
  return (
    <>
      <Card className="events-card m-3 mb-4 wow fadeInUp">
        <Link to={props.link}>
          <Card.Img
            variant="top"
            className="eventCardImgNew"
            src={process.env.PUBLIC_URL + "img/events/" + props.image}
          />
        </Link>
        <Card.Body>
          <Link className="linkTitle" to={props.link}>
            <Card.Title className="">{props.title}</Card.Title>
          </Link>
          <Link className="linkText" to={props.link}>
            <Card.Text className="textMinimum">{props.desc}</Card.Text>
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
