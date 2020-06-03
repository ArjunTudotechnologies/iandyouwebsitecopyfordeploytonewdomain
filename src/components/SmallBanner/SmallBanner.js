import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Col, Row } from "react-bootstrap";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
export default class SmallBanner extends Component {
  constructor(props) {
    const slides = props.slides;
    const bannerClass = props.bannerClass;
    super(props);
    this.state = {
      slides,
      bannerClass,
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
    console.log(this.state.contentList);
    const settings = {
      dots: true,
      infinite: true,
      nav: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      useCss: true,
      useTransform: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
    };
    return (
      <div className={this.state.bannerClass}>
        <Slider {...settings}>
          {this.state.slides.map(function (slide) {
            return (
              <div key={slide.id}>
                <div
                  key={slide.id}
                  className="small-banner d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url(${'img/smallbanner/'+slide.bannerImg})`,
                  }}
                >
                  <Container key={slide.id}>
                    <Row>
                      <Col md={12} lg={8} xl={8} key={slide.id}>
                        <h2 className="big-title wow fadeinDown">
                          {slide.title}
                        </h2>
                        <h2 className="title">{slide.subTitle}</h2>
                        <ul>
                          {slide.desc.map((person, index) => (
                            <li>{person.content}</li>
                          ))}
                        </ul>
                        <ButtonCustom className="mt-5">
                          Register Now
                        </ButtonCustom>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
