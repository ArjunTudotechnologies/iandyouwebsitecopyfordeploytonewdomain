import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Heading from "../../../components/Heading/Heading";
import Wave from "../../../assets/img/others/wave.png";
import TestimonialsCard from "../../../components/TestimonialsCard/TestimonialsCard";
const slides = [
  {
    id: "1",
    client_name: "Event One",
    designation: "CEO",
    testimonial:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    client_images: "1.jpg",
  },
  {
    id: "2",
    client_name: "Event One",
    designation: "CEO",
    testimonial:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    client_images: "1.jpg",
  },
  {
    id: "3",
    client_name: "Event One",
    designation: "CEO",
    testimonial:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    client_images: "1.jpg",
  },
  {
    id: "4",
    client_name: "Event One",
    designation: "CEO",
    testimonial:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    client_images: "1.jpg",
  },
  {
    id: "5",
    client_name: "Event One",
    designation: "CEO",
    testimonial:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    client_images: "1.jpg",
  },
];

export default class TestimonialsSection extends Component {
  constructor(props) {
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
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 2000,
      autoplaySpeed: 4000,
      autoplay: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="testimonials-section pt-0 pb-0">
        <img className="wave rotate-180" src={Wave} alt="testimonials" />
        <Container className="mt-5 mb-5">
          <Heading smalltitle="Testimonials" title="Testimonials" />

          <Slider {...settings}>
            {this.state.slides.map(function (slide) {
              return (
                <div key={slide}>
                  <TestimonialsCard
                    clientname={slide.client_name}
                    testimonial={slide.testimonial}
                    designation={slide.designation}
                  />
                </div>
              );
            })}
          </Slider>
        </Container>
        <img className="wave" src={Wave} alt="testimonials" />
      </section>
    );
  }
}
