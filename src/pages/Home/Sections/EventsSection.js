import React, { Component } from 'react';
import Heading from '.././../../components/Heading/Heading';
import EventsCard from '../../../components/EventsCard/EventsCard';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import Slider from "react-slick";
import Banner1 from '../../../assets/img/banners/banner-1.jpg';


const slides = [
    {
        "id": "1",
        "event_name": "Event One",
        "event_desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        "event_images": [
            {
                "img_id": "1",
                "img_name": "img1.jpg"
            },
            {
                "img_id": "2",
                "img_name": "img2.jpg"
            }
        ],
        "start_date": "2020/05/14",
        "end_date": "2020/05/14",
        "start_time": "15:01:27",
        "end_time": "15:01:27",
        "location": "Banglore",
    },
    {
        "id": "2",
        "event_name": "Event Two",
        "event_desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        "event_images": [
            {
                "img_id": "1",
                "img_name": "img1.jpg"
            },
            {
                "img_id": "2",
                "img_name": "img2.jpg"
            }
        ],
        "start_date": "2020/05/14",
        "end_date": "2020/05/14",
        "start_time": "15:01:27",
        "end_time": "15:01:27",
        "location": "Banglore",
    },
    {
        "id": "3",
        "event_name": "Event Three",
        "event_desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        "event_images": [
            {
                "img_id": "1",
                "img_name": "img1.jpg"
            },
            {
                "img_id": "2",
                "img_name": "img2.jpg"
            }
        ],
        "start_date": "2020/05/14",
        "end_date": "2020/05/14",
        "start_time": "15:01:27",
        "end_time": "15:01:27",
        "location": "Banglore",
    },
    {
        "id": "4",
        "event_name": "Event Three",
        "event_desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        "event_images": [
            {
                "img_id": "1",
                "img_name": "img1.jpg"
            },
            {
                "img_id": "2",
                "img_name": "img2.jpg"
            }
        ],
        "start_date": "2020/05/14",
        "end_date": "2020/05/14",
        "start_time": "15:01:27",
        "end_time": "15:01:27",
        "location": "Banglore",
    },
    {
        "id": "5",
        "event_name": "Event Three",
        "event_desc": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        "event_images": [
            {
                "img_id": "1",
                "img_name": "img1.jpg"
            },
            {
                "img_id": "2",
                "img_name": "img2.jpg"
            }
        ],
        "start_date": "2020/05/14",
        "end_date": "2020/05/14",
        "start_time": "15:01:27",
        "end_time": "15:01:27",
        "location": "Banglore",
    }
]


export default class EventsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides
        };
        this.click = this.click.bind(this);
    }
    click() {
        const { slides } = this.state;
        this.setState({
            slides:
                slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
        });
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 2000,
            autoplaySpeed: 4000,
            autoplay: true,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <section className="bg-color-2">
                    <Container>
                        <Heading smalltitle="Events" title="Upcoming Events" />

                        <div>
                            <Slider {...settings}>
                                {this.state.slides.map(function (slide) {
                                    return (
                                        <div key={slide}>
                                            <EventsCard desc={slide.event_desc} title={slide.event_name} />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </Container>
                </section>
            </>
        )
    }
}
