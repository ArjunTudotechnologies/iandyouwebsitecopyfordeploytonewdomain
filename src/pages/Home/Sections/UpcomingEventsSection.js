import React, { Component } from "react";
import Heading from ".././../../components/Heading/Heading";
import EventsCard from "../../../components/EventsCard/EventsCard";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const slides = [
	{
		id: "2",
		event_name: "Eshwari Shakthi Kendra Sadhana (ESKS)",
		event_desc:
			"Technically ESHWARI SHAKTHI KENDRA SADHANA is a SHAKTHA method of KUNDALINI activation and a form of the higher profound yogic spiritual practice, the SRIVIDYA Samayachara.",
		event_image: "esks.jpg",
		link: "sri",
		start_date: "1st & 2nd ( offline) May",
		end_date: "2020/05/14",
		start_time: "5 PM to 8 PM IST",
		end_time: "15:01:27",
		location: "ZOOM Meeting",
	},
	{
		id: "3",
		event_name: "Eshwari Kriya",
		event_desc:
			"Management is the coordination and administration of tasks to achieve a goal. To achive success in life one should know internal management of body mind and emotion",
		event_image: "event-1.jpeg",
		link: "sri",
		start_date: "7th to 9th  March 2021( offline & online )",
		end_date: "2020/05/14",
		start_time: "5 PM to 8 PM IST",
		end_time: "15:01:27",
		location: "ZOOM Meeting",
	},
	{
		id: "4",
		event_name: "Eshwari Dhyana",
		event_desc:
			"In the absence of all experiences lies the real experience of true existence - Jai Gurudev",
		event_image: "event-2.jpeg",
		link: "sri",
		start_date: "7th ( online) May 2021",
		end_date: "2020/05/14",
		start_time: "Sunday 5 PM to 8.30 PM IST",
		end_time: "15:01:27",
		location: "ZOOM Meeting",
	},
	{
		id: "1",
		event_name: "Tri Nethra",
		event_desc:
			" The story of Chandrarkagnivilochan means Trinetra- Once Lord Shiva was sitting quietly. Goddess Bhagwati Parvati came from behind and ",
		event_image: "tri.jpeg",
		link: "sri",
		start_date: "14th  to 16th May( offline)",
		end_date: "2020/05/14",
		start_time: "15:01:27",
		end_time: "15:01:27",
		location: "Banglore",
	},
	// {
	// 	id: "2",
	// 	event_name: "Nagarapanchami",
	// 	event_desc:
	// 		"Naga Panchami is a day of traditional worship of Nagas or snakes observed by Hindus throughout India, Nepal, and other countries where Hindu adherents live.",
	// 	event_image: "nagarapanchami-new.jpg",

	// 	start_date: "25/07/2020",
	// 	end_date: "25/07/2020",
	// 	start_time: "15:01:27",
	// 	end_time: "15:01:27",
	// 	location: "Banglore",
	// 	link: "#",
	// },
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
			"Srikari event at 20 August 2020, For more details contact us at +91 9900022506 ",
		event_image: "srikari-new.jpg",

		start_date: "20/12/2020",
		end_date: "20/12/2020",
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
				<section id="eventsSection">
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
