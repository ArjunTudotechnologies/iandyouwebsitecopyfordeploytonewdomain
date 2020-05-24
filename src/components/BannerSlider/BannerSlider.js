import React from "react";

export default function BannerSlider(props) {
  return (
    <div className="banner-slider">
      <h1 className="big-special-title">{props.title}</h1>
      <h2 className="big-title">{props.subTitle}</h2>
    </div>
  );
}
