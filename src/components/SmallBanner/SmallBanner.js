import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Col, Row } from "react-bootstrap";
import Kids from "../../assets/img/banners/kids.png";

export default class SmallBanner extends Component {
  constructor(props) {
    const slides = props.slides;

    super(props);
    this.state = {
      slides,
    };
    this.click = this.click.bind(this);
  }
  click() {
    const { slides } = this.state;
    this.setState({
      slides:
        slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6],
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      nav: false,
      speed: 500,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="pt-0">
        <Slider {...settings}>
          {this.state.slides.map(function (slide) {
            return (
              <div key={slide} className="">
                <div
                  className="small-banner"
                  style={{ backgroundImage: `url(${Kids})`  }}
                >
                  <Container>
                    <Row>
                      <Col>
                        <h2>{slide.title}</h2>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Container>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }
}
