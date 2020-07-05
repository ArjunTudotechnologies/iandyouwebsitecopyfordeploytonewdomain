import React from "react";
import Img2 from "../../assets/img/programs/img-2.jpg";

import { Button } from "react-bootstrap";

export default function ProgramsSmall(props) {
  return (
    <div className="programs" style={{ height: "400px" }}>
      <div className="programs-image-overlay">
        <img
          className="program-small-img"
          src={process.env.PUBLIC_URL + "img/others/" + props.image}
          alt="program name"
        />
      </div>
      <div className="program-content">
        <h2 className="program-small-title">{props.title}</h2>
        <Button variant="primary" size="lg">
          {props.btnname}
        </Button>
      </div>
    </div>
  );
}
