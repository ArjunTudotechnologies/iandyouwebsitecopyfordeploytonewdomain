import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import CovidBannerImg from "../../assets/img/covid-banners/banner.png";
import { MdArrowForward } from "react-icons/md";
import DonateModal from '../DonateModal/DonateModal';

export default function CovidBanner() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="wow fadeInUp" data-wow-delay="0s">
            <Container fluid>
                <Card className="covid-card shadow">
                    <Card.Body>
                        <div className="image-overlay">
                            <img alt="Covid-19" src={CovidBannerImg} className="covid-banner-image" />
                        </div>
                        <div className="banner-content">
                            <h2 className="title color-white wow fadeInUp" data-wow-delay="1s">COVID-19 relief efforts</h2>
                            <hr className="line wow fadeInUp" data-wow-delay="1s" />
                            <p className="wow fadeInUp" data-wow-delay="1s">"feels great when you feed someone before your meal"</p>
                            <p className="wow fadeInUp" data-wow-delay="1s"> || svasti-prajā-bhyaḥ pari-pāla-yaṁtāṁ nyāyena mārgeṇa mahīṁ mahīśāḥ |<br /> go-brāhmaṇebhyaḥ śubham-astu nityaṁ lokāḥ samastāḥ sukhino-bhavaṁtu ||</p>
                            <div className="wow fadeInUp mt-4" data-wow-delay="1s"><Button variant="primary" size="lg" onClick={() => setModalShow(true)}><span className="pr-2">Donate</span><MdArrowForward /></Button></div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

            <DonateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}
