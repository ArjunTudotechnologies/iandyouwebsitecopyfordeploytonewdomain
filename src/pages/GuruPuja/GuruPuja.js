import React from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import RegisterDarkCard from "../../components/RegisterDarkCard/RegisterDarkCard";
import { Container, Row, Col } from "react-bootstrap";
import { FaBrain, FaUser, FaHeart } from "react-icons/fa";
import EshawariKriya from "../../assets/img/small-banners/img-1.jpg";

const slides = [
  {
    id: "1",
    title: "Eshwari Kriya",
    subTitle: "Celebrate Life",
    desc: [],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
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
    bannerImg: "eshwari-shakthi-kendra-sadhana.png",
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
    bannerImg: "kids.png",
  },
];

export default function GuruPuja() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
      <section>
        <Container>
          <Heading smalltitle="Sadhana & Dhyana" title="Guru purnima " />
          <div className="text-justify">
            <p>
              <b>The 1st pre-vedic story of Yogic tradition :</b>
            </p>
            <p>
              Anandha Bhirava - a young charismatic one who sat himself under a
              banyan tree in estatic silence facing towards south. There where
              four seekers the 1st was in Misery , 2nd was willing to have
              progress and success, 3rd one was to know about the purpose of
              life and the 4th one was wise but still something was lacking in
              him.
            </p>
            <p>
              On the occasion of fullmoon day lord Bhirava imparted knowledge to
              those 4 seekers in that ecstatic silence, his blessing made them
              to realise that the Misery was gone, happiness arrived, seeking
              accomplishd and they got connected with the guru, Adi guru, Adi
              yogi, Adi natha or you can call him as Dakshina Murthi.
            </p>
            <p>
              Sri Shankaracharya who spoke the words " Mouna vyakhya prakatitha
              & para Brahma tatvam yuvanam"
            </p>
            <p>Let's see the inner meaning of the story, </p>
            <p>
              The 4 qualities which have been mentioned earlier varies from
              seeker to seeker, if misery is more in a seeker it will vanish,
              the one aspires progress and success he will get happiness, the
              seeker aspiring knowledge of life's purpose will accomplish it and
              finally wisdom will come with the connection of a guru only.
            </p>

            <p>
              GURU PURNIMA is to vanish misery, to establish happiness with
              knowledge and the connection with the guru to lead a holistic
              life.
            </p>
          </div>
        </Container>
      </section>
      <RegisterDarkCard
        registerCardBg="celebratelife.jpg"
        title="Celebrate Life"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that."
      />
      <Footer />
    </div>
  );
}
