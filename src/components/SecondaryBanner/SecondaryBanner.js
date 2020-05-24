import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import BannerSlider from "../../components/BannerSlider/BannerSlider";

export default class SecondaryBanner extends Component {
  constructor(props) {
    const slides = props.slickSlides;

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
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      verticalSwiping: false,
      swipeToSlide: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed:1000,
      adaptiveHeight: true,
      arrows:false,
      useCSS:true,
      useTransform:true,
      fade:true,
      easing:"linear",
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };

    return (
      <div>
        <div className="secondary-banner">
          <div className="image-overlay">
            <img src={this.props.bannerImg} alt="banner" className="zoom-img-" />
          </div>
        </div>
        <Container>
          <Row>
            <Col md={10}>
              <div className=" wow bounceIn"> 
                <Slider {...settings}>
                  {this.state.slides.map(function (slide) {
                    return (
                      <div key={slide}>
                        <BannerSlider className="wow bounceIn"
                          title={slide.title}
                          subTitle={slide.subTitle}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
