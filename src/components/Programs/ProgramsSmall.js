import React from 'react';
import Banner2 from '../../assets/img/banners/banner-2.jpg';
import Img1 from '../../assets/img/programs/img-1.jpg';
import Img2 from '../../assets/img/programs/img-2.jpg';


import { Button } from 'react-bootstrap';

export default function ProgramsSmall() {
    return (
        <div className="programs" style={{height:"400px"}}> 
            <div className="programs-image-overlay">
                <img className="program-small-img" src={Img2} alt="program name" />
            </div>
            <div className="program-content">
                <h2 className="program-small-title">Know the Basic Tenets With Traditional Definitions.</h2>
                <Button variant="primary" size="lg">Read More</Button>
            </div>
        </div>
    )
}
