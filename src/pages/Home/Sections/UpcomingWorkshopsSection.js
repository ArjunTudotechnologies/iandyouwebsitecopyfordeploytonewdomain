import React, { Component } from "react";
import Heading from "../../../components/Heading/Heading";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import WorkshopsCard from "../../../components/WorkshopsCard/WorkshopsCard";

const slides = [
  {
    id: "1",
    event_name: "Guru Puja",
    event_desc:
      "Anandha Bhirava - a young charismatic one who sat himself under a banyan tree  in estatic silence facing towards south. There where four seekers the 1st was in Misery , 2nd was willing to have progress and success, 3rd one was to know about the purpose of life and the 4th one was wise but still something was lacking in him.",
    event_image: "gurupooja-new.jpg",
    start_date: "05/07/2020",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
    link: "guru-puja",
  },
  {
    id: "2",
    event_name: "Sri Vidhya Eshwari Sadhana level 1",
    event_desc:
      "Sri Vidhya Eshwari Sadhana is theSadhana / Practice of the infinite order. As the name implies it is the Practice of 'SRI' who is the granter of wealth, wealth of both worldly and spiritual",
    event_image: "srividya.jpg",
    start_date: "07/11/2020",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    link: "eshwari-srividhya-sadhana",
    location: "Banglore",
  },
  {
    id: "3",
    event_name: "Kala Bhairava Dhyana",
    event_desc: "",
    event_image: "kalabairava.jpg",
    start_date: "07/12/2020",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    link: "kala-bhairava-dhyana",
    location: "Banglore",
  },
  {
    id: "4",
    event_name: "Udgamana",
    event_desc:
      "what is difference between you and others or me and you ? that is the level of awareness , some have less , some have moderate and some have more , the one possessing more, for such person the possibility of success is more",
    event_image: "udgamana.jpg",
    start_date: "07/09/2020",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    link: "udgamana",
    location: "Banglore",
  },
  {
    id: "5",
    event_name: "Immortal Process",
    event_desc:
      "The theory of 'karma and rebirth' raises numerous questions such as how, when, and why did the cycle start in the first place, what is the relative Karmic merit of one karma versus another and why, and what evidence is there that rebirth actually happens, among others.",
    event_image: "immortal.jpg",
    start_date: "2020/05/14",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    link: "immortal-process",
    location: "Banglore",
  },
];

export default class UpcomingWorkshops extends Component {
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
      speed: 1000,
      autoplaySpeed: 4000,
      autoplay: false,
      pauseOnHover: true,
      focusOnSelect: false,
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
      <>
        <section className="bg-color-2">
          <Container>
            <Heading smalltitle="Workshops" title="Upcoming Workshops" />

            <div>
              <Slider {...settings}>
                {this.state.slides.map(function (slide) {
                  return (
                    <div key={slide}>
                      <WorkshopsCard
                        desc={slide.event_desc}
                        title={slide.event_name}
                        location={slide.location}
                        date={slide.start_date}
                        image={slide.event_image}
                        link={slide.link}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Container>
        </section>
      </>
    );
  }
}
