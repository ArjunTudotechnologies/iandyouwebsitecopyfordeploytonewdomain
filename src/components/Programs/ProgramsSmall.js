import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <Link to="blog">
          <Button variant="primary" size="lg">
            {props.btnname}
          </Button>
        </Link>
      </div>
    </div>
  );
}
