import React, { Component } from "react";
import Heading from "../../../components/Heading/Heading";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import WorkshopsCard from "../../../components/WorkshopsCard/WorkshopsCard";

const slides = [
  {
    id: "1",
    event_name: "Sri Vidhya Eshwari Sadhana level 1",
    event_desc:
      "Sri Vidhya Eshwari Sadhana is theSadhana / Practice of the infinite order. As the name implies it is the Practice of 'SRI' who is the granter of wealth, wealth of both worldly and spiritual",
    event_image: "srividya.jpg",
    start_date: "2020/05/14",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
  },
  {
    id: "2",
    event_name: "Kalabhairava Dhyana",
    event_desc:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    event_image: "kalabairava.jpg",
    start_date: "2020/05/14",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
  },
  {
    id: "3",
    event_name: "Guru Puja",
    event_desc:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    event_image: "gurupooja.jpg",
    start_date: "2020/05/14",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
  },
  {
    id: "4",
    event_name: "Udgamana",
    event_desc:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    event_image: "srividya.jpg",
    start_date: "2020/05/14",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
    location: "Banglore",
  },
  {
    id: "5",
    event_name: "Sanskar",
    event_desc:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    event_image: "srividya.jpg",
    start_date: "2020/05/14",
    end_date: "2020/05/14",
    start_time: "15:01:27",
    end_time: "15:01:27",
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
