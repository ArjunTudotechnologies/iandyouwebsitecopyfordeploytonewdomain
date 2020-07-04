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
    title: "Know Your Purpose ",
    subTitle: "What is the purpose of your life ?",
    desc: [],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
  },
];

export default function KnowYourPurpose() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Know Your Purpose "
            specialTitle="What is the purpose of your life ?"
          />
          <div className="text-justify">
            <p>
              A fool lives to eat and the wise man eats to live but then the
              question remains, for what purpose does the wise man live ? Living
              is not an end by itself. There has to be a purpose for man to live
              for.
            </p>
            <p>
              Most intellectual people say that life has no purpose and no
              meaning as such, we are the one who give a meaning to our life,
              later it feels as if that was the purpose of life but there is
              another mystic dimension left to unfold.
            </p>
            <p>
              The karma theories are the concept of reincarnation or the cycle
              of rebirths (saṃsāra).
            </p>
            <p>
              Rebirth is a fundamental concept of Hinduism, Buddhism, Jainism,
              Taoism and Sikhism. The concept has been intensely debated in
              ancient literature of India; with different schools of Indian
              religions considering the relevance of rebirth as either
              essential, or secondary, or unnecessary fiction.
            </p>
            <p>
              Rebirth, or saṃsāra, is the concept that all life forms go through
              a cycle of reincarnation that is a series of births and rebirths.
              The rebirths and consequent life may be in different realm,
              condition or form. The karma theories suggest that the realm,
              condition and forms depend on the quality and quantity of karma.
              In schools that believe in rebirth, every living being's Jeeva
              transmigrates (recycles) after death, carrying the seeds of Karmic
              impulses from life just completed, into another life and lifetime
              of karmas. This cycle continues indefinitely.
            </p>

            <b>
              “Whatever state of being one remembers when he quits his body,
              that state he will attain without fail.”(BG 8:6)
            </b>
            <p>
              The process of changing one’s nature at the critical moment of
              death is explained here. It is a very scientific process and in
              one line only we can understand the whole thing. Our state of mind
              at the time of death determines the state we will attain after
              death.
            </p>
            <p>
              And this verse very clearly and scientifically states what
              determines our destination after leaving this body and that is our
              state of mind in other words it is said that the one, before
              quitting his body the state of mind or the thoughts or emotions
              which he/she carry, that could be the unfulfilled desires or
              pending tasks, the person need to take another birth to fulfill
              that desire or to complete that task.
            </p>
            <p>
              If one fails to do that then he/she takes birth after birth, the
              vicious cycle of birth and death will continue.We realized that we
              are immortal our karma or unfulfilled desires or unsatisfied life
              style has made us take lives after lives, we had experience from
              IMMORTAL PROCESS, now this workshop is another step towards a
              Holistic life .
            </p>

            <p>
              There are many schools readily available for us to know, learn and
              improvise Personal life development, Professional life
              development,Personality development, Money attracting workshop,
              Hypnosis to train the mind and Methods for thoughts manifestations
              but after all such teachings we still feel so incomplete and
              experience a lack of satisfaction
            </p>
            <p>Why ? </p>
            <p>Because we still have no clue of our life's purpose </p>

            <b>
              What was that last feeling/thought which you carried when you left
              your body ? which made you to take this available present life.
            </b>

            <p>
              Here is a workshop to let you know and experience your very
              available life's PURPOSE and the knowledge of Ultimate purpose of
              life
            </p>

            <p>
              <b>Eligibility</b>- Immortal Process Workshop
            </p>

            <p>Celebrate life </p>
            <p>
              <b>
                <span
                  clasName="lora-text"
                  style={{ fontFamily: "Lora", fontSize: "20px" }}
                >
                  Jai Guru Dev
                </span>
              </b>
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
