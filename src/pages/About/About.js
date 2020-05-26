import React from "react";
import Header from "../../components/Header/Header";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import Image from "../../assets/img/banners/banner-1.jpg";
const slides = [
  {
    id: "1",
    title: "Eshwari Kriya",
    subTitle: "Celebrate Life",
    desc: [],
    bannerImg: { Image },
  },
  {
    id: "2",
    title: "Eshwari Kriya",
    subTitle: "On the mind level",
    desc: [
      {
        id: "1",
        content: "Reduces mental fatigue (strain)",
      },
      {
        id: "2",
        content: "Improvises concentration drastically and keeps you focused",
      },
      {
        id: "3",
        content:
          " Keeps you free of stress and psychosomatic disorders caused due to stress",
      },
      { id: "4", content: "Provides contentment and peace of mind" },
      { id: "5", content: "Increases memory,skill and creativity." },
    ],
    bannerImg: { Image },
  },
  {
    id: "3",
    title: "Eshwari Kriya",
    subTitle: "On the physical level",
    desc: [
      {
        id: "1",
        content: "Keeps you healthy and fit.",
      },
      {
        id: "2",
        content: "Stimulates energy throughout the body and aids inner balance",
      },
      {
        id: "3",
        content:
          "Rejuvenates tired cells, helping in reducing early signs of aging",
      },
      {
        id: "4",
        content:
          "Keeps you active throughout the day and maintains energy level for 16 hours in optimum",
      },
      { id: "5", content: "Strengthens Immunity" },
    ],
    bannerImg: { Image },
  },
];

export default function About() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} />
    </div>
  );
}
