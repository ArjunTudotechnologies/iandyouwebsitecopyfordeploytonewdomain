import React from "react";
import { Card, Button } from "react-bootstrap";

export default function RegistrationSliderCard(props) {
  return (
    <div className="mt-5">
      <Card className="registration-card">
        <h2 className="title">{props.title}</h2>
        <p>{props.desc}</p>
        <h3>{props.subtitle}</h3>
        <ul className="m-0 pl-3 pb-5">
          <li>Ability to synergize one’s mind, body and inner being</li>
          <li>Holistic understanding of the philosophy of yoga</li>
          <li>
            Understanding Yogic Stress management, prevention of stress related
            ailments
          </li>
        </ul>
        <Button variant="light" size="sm">Read More</Button> 
      </Card>
    </div>
  );
}
