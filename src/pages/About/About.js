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
    title: "Eshwari Kids Kriya",
    subTitle: "",
    desc: "",
  },
  {
    id: "3",
    title: "Eshwari Kids Hata Yoga",
    subTitle: "",
    desc: "",
  },
  {
    id: "4",
    title: "Sanskar Teacher Training",
    subTitle: "",
    desc: "",
  },
  {
    id: "5",
    title: "Kids Social and Nature awareness program",
    subTitle: "",
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
