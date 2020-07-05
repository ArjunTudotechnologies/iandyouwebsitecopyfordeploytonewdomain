import React from "react";
import { Button } from "react-bootstrap";

export default function ProgramsBig(props) {
  return (
    <div className="programs">
      <div className="programs-image-overlay">
        <img
          className="program-big-img"
          src={process.env.PUBLIC_URL + "img/others/Shop.jpg"}
          alt="program name"
        />
      </div>
      <div className="program-content">
        <h2 className="program-big-title">{props.title}</h2>
        <h2 className="program-big-title">{props.titleOne}</h2>
        <Button variant="primary" size="lg">
          Read More
        </Button>
      </div>
    </div>
  );
}
