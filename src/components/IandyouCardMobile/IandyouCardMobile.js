import React, { Component } from "react";
import Slider from "react-slick";
import FirstImg from "../../assets/img/cards/11.jpg";
import SecondImg from "../../assets/img/cards/sri-prasad-guruji.jpeg";
import ThirdImg from "../../assets/img/cards/1.jpg";
import { Container } from "react-bootstrap";
import Line from "../../assets/img/others/line-2.png";

export default class IandyouCardMobile extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="iandyou-card-mobile">
        <Slider {...settings}>
          <div>
            <div className="position-relative">
              <img src={FirstImg} alt="I" />
              <div className="content">I</div>
            </div>
          </div>
          <div>
            <div className="position-relative">
              <img src={SecondImg} alt="You" />
              <div className="content">You</div>
            </div>
          </div>
          <div>
            <div className="position-relative">
              <img src={ThirdImg} alt="We" />
              <div className="content">We</div>
            </div>
          </div>
        </Slider>
        <Container>
          <div className="text-center">
            <h2
              className="big-title text-center  mt-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              I And You Being Together
              <br />
              <span className="gradient-text">Let's move together</span>
            </h2>
            <h3
              className="special-title wow fadeInUp"
              data-wow-delay="0.5s"
              data-wow-duration="1s"
            >
              {" "}
              - Sangachadwam
            </h3>
            <div className="text-center">
              <img
                src={Line}
                alt="line"
                className="line wow fadeInUp"
                data-wow-delay="1s"
                data-wow-duration="1s"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
