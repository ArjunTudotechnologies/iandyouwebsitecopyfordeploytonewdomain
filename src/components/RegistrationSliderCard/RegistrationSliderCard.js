import React from "react";
import { Card, Button } from "react-bootstrap";
import Mandala from "../../assets/img/others/pattern.png";

export default function RegistrationSliderCard(props) {
  return (
    <div className="mt-5">
      <Card className="registration-card">
        <div className="pattern-bg">
          <div className="text-center">
            <img src={Mandala} alt="icon" className="img-fluid rotateme" />
          </div>
        </div>
        <div className="content">
          <h2 className="title">{props.title}</h2>
          <p>{props.desc}</p>
          <h3>{props.subtitle}</h3>
          <ul className="m-0 pl-3 pb-5">
            <li>Reduces mental fatigue (strain)</li>
            <li>Improvises concentration drastically and keeps you focused</li>
            <li>
              Keeps you free of stress and psychosomatic disorders caused due to
              stress
            </li>
            <li>Increases memory,skill and creativity.</li>
          </ul>
          <Button variant="outline-light" size="sm">
            Read More
          </Button>
        </div>
      </Card>
    </div>
  );
}
