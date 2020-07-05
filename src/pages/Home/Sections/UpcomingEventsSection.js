import React, { Component } from "react";
import Heading from ".././../../components/Heading/Heading";
import EventsCard from "../../../components/EventsCard/EventsCard";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const slides = [
  {
    id: "1",
    event_name: "Sri",
    event_desc:
      "Sukha or Happiness is the one thing that every person in this world strives for. Every action of human being is directly or indirectly aimed at achieving happiness. ",
    event_image: "sri.jpg",
    link: "sri",
    start_date: "24/07/2020",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
  },
  {
    id: "2",
    event_name: "Nagarapanchami",
    event_desc:
      "Naga Panchami is a day of traditional worship of Nagas or snakes observed by Hindus throughout India, Nepal, and other countries where Hindu adherents live.",
    event_image: "nagarapanchami-new.jpg",

    start_date: "10/08/2020",
    end_date: "25/07/2020",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
    link: "#",
  },
  // {
  //   id: "3",
  //   event_name: "Navarathri",
  //   event_desc:
  //     "Navaratri is a Hindu festival that spans nine nights and is celebrated every year in the autumn. It is observed for different reasons and celebrated differently in various parts of the Indian cultural sphere.",
  //   event_image: "sri.jpg",

  //   start_date: "10/09/2020",
  //   end_date: "17/10/2020",
  //   start_time: "15:01:27",
  //   end_time: "15:01:27",
  //   location: "Banglore",
  //   link: "sri",
  // },
  {
    id: "6",
    event_name: "Srikari",
    event_desc:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    event_image: "srikari-new.jpg",

    start_date: "10/11/2020",
    end_date: "19/12/2020",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
    link: "#",
  },
];

export default class UpcomingEventsSection extends Component {
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
        <section>
          <Container>
            <Heading smalltitle="Events" title="Upcoming Events" />

            <div>
              <Slider {...settings}>
                {this.state.slides.map(function (slide) {
                  return (
                    <div key={slide}>
                      <EventsCard
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
