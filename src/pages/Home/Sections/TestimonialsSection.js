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
    client_name: "Tina Pradeep Kale",
    designation: "Cabin Supervisor - Emirates",
    testimonial:
      "My experience with Eshwari Kriya is basically that of Discovering Me... Finding out who I really am..Knowing what my existence on this Earth Plane is all about..and Why am I here...It is a Journey to the Inner Self...Connecting to the Cosmos through the Divine Feminine Energy whom we term as Mother or Amma..It is a practice of Self Healing and Self Realizing..I am truly Blessed and Grateful to.learn this Kriya through my Master Shri Prasad🙏and  incorporate it into my daily life..",
    client_images: "person.jpg",
  },
  {
    id: "4",
    client_name: "Shalini",
    designation: "Homemaker",
    testimonial:
      "I'm a complete homemaker since 20 years, and have  completely dedicated my life  befitting all the roles my family needed. In the process of being so and trying my best to fit into all the befitting roles while also keeping myself happy, i had been feeling lost somewhere.      Not to mistake, i do love my family and feel blessed to have them,i just felt empty like there was something more i yearned for. My emotions had grown too strong for me to bare and they had always gotten the better of me.",
    client_images: "shalini.jpg",
  },
  {
    id: "5",
    client_name: "Mrs. Aruna M G",
    designation: "Associate Professor - M S Engineering College",
    testimonial:
      "Without any Experience and Knowledge about Eshwari Kriya, I joined and experienced a wonderfull journey within myself Physically, mentally and learnt how to balance my life journey. Eshwari Kriya really is a god’s gift to me and it has changed my lifestyle.   There are no words to explain.      I have now thought of doing Eshwari Kriya alone after experiencing its many benefits and have continued this journey to learn and experience and also attend all the workshops and courses. Sri Prasad Guruji's  teaching  is very simple, realistic,scientific and effective.",
    client_images: "aruna.jpg",
  },
  {
    id: "5",
    client_name: "Dr Santhosh Kumar P",
    designation:
      "ENT, Head & Neck surgeon ( MS ENT, Fellowship in Rhinoloy and Anterior skull base surgery )",
    testimonial:
      "Jai Gurudev, I like to share my experience regarding Eshwari Kriya and other workshops with guruji. I had a strained lower back ( started with heavyweight lifting in gym) and the pain was persistent for longer duration( more than 4yrs) and it was diagnosed as piriformis syndrome and B/L Sacroilitis. Had tried all sorts of treatment ( medications, Physio therapy) but to no relief. This had hampered my day to day activities and it had made me lose my confidence. later in 2010 I met Sri Prasad guruji and he guided me through eshwari Kriya and intermittently he did Nirmalikarana Kriya. And those Experiences can be tasted and cannot be explained, one must experience ESHWARI KRIYA and Nirmalikarna Kriya to Taste the reality,it's nature and experiences. Benefits: There are a wholesome, the mind starts to kindle every aspect of its mechanism, accepting things the way they come  that keep it stress free and experience the inner joy, the physical body starts supporting you to the extent that it keeps you fit for ages and helps to work more than 16hrs a day. Eshwari Kriya alone is a stepping stone to experiencing the infinite and universal bliss. I am looking forward to attend more and more of gurujis workshops for knowledge, betterment and sprirtual upliftment.",
    client_images: "santhosh.jpeg",
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
