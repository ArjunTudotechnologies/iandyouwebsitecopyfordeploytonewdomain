import React from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import { Container } from "react-bootstrap";

const slides = [
  {
    id: "1",
    title: "Eshwari Dhyana Level 1 & 2",
    subTitle: "A science of creative intelligence",
    desc: [],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
  },
];

export default function EshwariDhyanaLevels() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Eshwari Dhyana Level 1 & 2, "
            specialTitle="A science of creative intelligence"
          />
          <div className="text-justify">
            <p>
              The Eshwari Siddha Dhyana is a form of meditation it is based on
              Patanjali Yoga Sutra Chapter 03 (Vibhuthi Pada) The basic Eshwari
              Dhyana technique opens the mind to a Fourth state of consciousness
              or the Turiya state the most fundamental level of human awareness
              which allows for the direct experience of the unified state.
              Eshwari Siddha Dhyana cultures the ability to think and act from
              this most basic and powerful level.
            </p>
            <p>
              By learning to function from the Turiya state of Consciousness,
              the mind gains increasing support from the organizing intelligence
              of nature, by promoting this inner experience, allows thought and
              action to spontaneously become more in accord with the
              evolutionary power.
            </p>
            <p>
              Practice of the Eshwari Siddha Dhyana thus accelerates the
              progress of Sadhaks towards the realization of their full
              potential, the state of enlightenment In addition results in
              greater skill in action—the ability to fulfill one's own desires
              while simultaneously promoting the evolution of everyone in the
              environment. -The mantra is said to be a vehicle that allows the
              individual's attention to travel naturally to a less active,
              quieter style of mental function.-words create waves of
              vibrations, and the quality of vibration of a mantra should
              correspond to the vibrational quality of the individual.
            </p>
          </div>
          <h2 className="title mt-5 mb-4">Benefits:</h2>
          One can develop Multiple intelligence like...
          <ul>
            <li>Active ,optimum Perception from five senses </li>
            <li>The sense of clear separation of intellect and self </li>
            <li>The creative intelligence and intuitive intelligence </li>
            <li>Clairaudience abilities</li>
            <li>The clairvoyant abilities </li>
            <li>Conquer thirst and hunger </li>
          </ul>
          <p>
            The fourth satate of Consciousness or Turiya is considered highly
            beneficial. Regular experience of this Turiya state is said to lead
            to rapid and cumulative benefits for the individual—growth towards
            the highest states of consciousness enlightenment, when sadhaks
            experience Turiya Consciousness, they directly contact the cosmic
            consciousness. When the sadhak is thus attuned to the source of all
            the laws of nature
          </p>
          <p>
            The organizing intelligence that upholds life throughout the vast
            cosmos, and promotes the evolution of millions of species on earth
            both body and mind function with the efficiency and effectiveness of
            nature’s intelligence. In fact dramatically improves both physical
            and mental functioning, Although this site focuses primarily on
            peace creation in society as a whole. Eshwari Siddha Dhyana after
            Eshwari Dhyana is the key to celebrate a blissful life.
          </p>
          <h2 className="title mt-5 mb-4">Benefits:</h2>
          <ul>
            <li> trains the conscious mind function</li>
            <li>trains the awareness to act according to Cosmic law </li>
            <li> develops higher levels of intelligence </li>
            <li> increases learning abilities and creativity</li>
            <li> increases brain and neurological efficacy</li>
            <li>
              provides mind /body coordination which is expressed in skill
              oriented actions
            </li>
            <li> reduces negative tendencies and promotes positivity</li>
            <li>enhances harmony in the family and society </li>
            <li>unfolds creative intelligence and intuitive intelligenc</li>
          </ul>
          <p>
            Celebrate blissful life, let's create disease free, stress free and
            holistic life through Eshwari sidha Dhyana
          </p>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
