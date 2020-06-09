import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Heading from "../../../components/Heading/Heading";
import Wave from "../../../assets/img/others/wave.png";
import TestimonialsCard from "../../../components/TestimonialsCard/TestimonialsCard";
const slides = [
  {
    id: "1",
    client_name: "S.Indra",
    designation: "CEO - eDatalabs",
    testimonial:
      "A scientific process based simple way of gurujis  teaching, I was overwhelmed, he revealed answers making me understand of the queries which were stored in my heart for long, even without asking, as a short tempered person that I was, after initiation I could see noticeable changes in my temper & behaviour, i am experiencing joy, peace and more productivity in my work Jai guru dev",
    client_images: "indra.jpg",
  },
  {
    id: "2",
    client_name: "Gangadhar C Uppin",
    designation: "Associate Vice President - MICRO LABS LIMITED",
    testimonial:
      "Eshwari Kriya has helped me to face many challenges with a balanced approach, cool and calm mind to a more responsive than reactive approach, at all levels like - personal, professional, emotional and as a whole in the society.",
    client_images: "Gangadhar.jpg",
  },
  {
    id: "3",
    client_name: "S.Indra",
    designation: "CEO",
    testimonial:
      "My experience with Eshwari Kriya is basically that of Discovering Me... Finding out who I really am..Knowing what my existence on this Earth Plane is all about..and Why am I here...It is a Journey to the Inner Self...Connecting to the Cosmos through the Divine Feminine Energy whom we term as Mother or Amma..It is a practice of Self Healing and Self Realizing..I am truly Blessed and Grateful to.learn this Kriya through my Master Shri Prasad🙏and  incorporate it into my daily life..",
    client_images: "person.jpg",
  },
  {
    id: "4",
    client_name: "Gangadhar C Uppin",
    designation: "Associate Vice President - MICRO LABS LIMITED",
    testimonial:
      "Eshwari Kriya has helped me to face many challenges with a balanced approach, cool and calm mind to a more responsive than reactive approach, at all levels like - personal, professional, emotional and as a whole in the society.",
    client_images: "Gangadhar.jpg",
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
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 2000,
      autoplaySpeed: 4000,
      autoplay: true,
      pauseOnHover: true,
      // adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
                    clientimage={slide.client_images}
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
