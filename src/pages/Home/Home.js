import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CovidBanner from '../../components/CovidBanner/CovidBanner';
import { WOW } from 'wowjs';
import EventsSection from './Sections/EventsSection';
import { Container, Carousel } from 'react-bootstrap';



export default class Home extends Component {
    componentDidMount() {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: true
        })

        wow.init();
    }
    render() {
        return (
            <div>
                <Header />
                <CustomCarousel />
                <EventsSection />
                <CovidBanner />


            </div>
        )
    }
}
