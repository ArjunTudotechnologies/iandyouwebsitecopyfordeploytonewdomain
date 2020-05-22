import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { WOW } from 'wowjs';
import EventsSection from './Sections/EventsSection';
import ProgramsSection from './Sections/ProgramsSection';
import VideoSection from './Sections/VideoSection';



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
                <EventsSection />
                <VideoSection/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <ProgramsSection />
                
                <Footer/>

            </div>
        )
    }
}
