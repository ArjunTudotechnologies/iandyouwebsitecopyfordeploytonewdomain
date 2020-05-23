import React from "react";
import Header from "../../components/Header/Header";
import SecondaryBanner from "../../components/SecondaryBanner/SecondaryBanner";
import Image from "../../assets/img/banners/banner-1.jpg";
const slides = [
  {
    id: "1",
    title: "Sanskar",
    subTitle: "Pesonality and behaviour development",
    desc: "",
  },
  {
    id: "2",
    title: "Eshwari Kids kriya",
    subTitle: "Pesonality and behaviour development",
    desc: "",
  },
  {
    id: "3",
    title: "Sanskar",
    subTitle: "Pesonality and behaviour development",
    desc: "",
  },
  {
    id: "4",
    title: "Sanskar",
    subTitle: "Pesonality and behaviour development",
    desc: "",
  },
  {
    id: "5",
    title: "Sanskar",
    subTitle: "Pesonality and behaviour development",
    desc: "",
  },
];

export default function About() {
  return (
    <div>
      <Header />
      <SecondaryBanner bannerImg={Image} slickSlides={slides} />
    </div>
  );
}
