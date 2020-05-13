import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import CovidBanner from '../../components/CovidBanner/CovidBanner';
import {WOW} from 'wowjs';



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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <CovidBanner />
            </div>
        )
    }
}
