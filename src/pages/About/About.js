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
    bannerImg:{Image}
  },
  {
    id: "2",
    title: "Eshwari Kids Kriya",
    subTitle: "",
    desc: "",
    bannerImg:{Image}
  },
  {
    id: "3",
    title: "Eshwari Kids Hata Yoga",
    subTitle: "",
    desc: "",
    bannerImg:{Image}
  },
  {
    id: "4",
    title: "Sanskar Teacher Training",
    subTitle: "",
    desc: "",
    bannerImg:{Image}
  },
  {
    id: "5",
    title: "Kids Social and Nature awareness program",
    subTitle: "",
    desc: "",
    bannerImg:{Image}
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
