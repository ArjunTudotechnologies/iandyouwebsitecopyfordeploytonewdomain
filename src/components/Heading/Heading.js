import React from 'react'

export default function Heading(props) {
    return (
        <div className="pb-4">
            <p className="sub-small-title  wow fadeInUp  color-orange" data-wow-delay="0.5s">{props.smalltitle}</p>
    <h2 className="title  wow fadeInUp" data-wow-delay="1s">{props.title}<span>{props.specialTitle}</span></h2>
        </div>
    )
}
