import React from "react";
import Header from "../../components/Header/Header";
import SecondaryBanner from "../../components/SecondaryBanner/SecondaryBanner";
import Image from "../../assets/img/banners/banner-2.jpg";

export default function About() {
  return (
    <div>
      <Header />
      <SecondaryBanner  bannerImg={Image}/>
    </div>
  );
}
