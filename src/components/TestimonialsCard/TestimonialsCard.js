import React from "react";
import { Card } from "react-bootstrap";

export default function TestimonialsCard(props) {
  return (
    <Card className="testimonials-card mt-5 mb-5 ml-3 mr-3">
      <p>{props.testimonial}</p>
      <hr />
      <div className="content">
        <div>
          <img
            src="static/media/banner-1.1f2a6ca3.jpg"
            alt={props.clientname}
          />
        </div>
        <div>
          <p className="client">{props.clientname}</p>
          <p className="designation">{props.designation}</p>
        </div>
      </div>
    </Card>
  );
}
