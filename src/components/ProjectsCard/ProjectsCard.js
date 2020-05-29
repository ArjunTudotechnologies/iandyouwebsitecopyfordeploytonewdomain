import React from "react";
import Image from "../../assets/img/small-banners/img-1.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ProjectsCard(props) {
  return (
     
          <div className="blog blog-style--1">
            <div className="thumbnail">
              <a href="/blog-details">
                <img className="w-100" src={Image} alt="Blog Images" />
              </a>
            </div>
            <div className="content">
              <p className="blogtype">{props.smallTitle}</p>
              <h4 className="title">
                <a href="/blog-details">{props.title}</a>
              </h4>
              <div className="blog-btn">
               
                <Link to={props.link}>
                <Button variant="outline-light" className="btnOutline">Read More</Button>
                </Link>
              </div>
            </div>
          </div>
         
  );
}
