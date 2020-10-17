import React from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import { Container } from "react-bootstrap";

const slides = [
  {
    id: "1",
    title: "Eshwari Dhyana",
    subTitle: "",
    desc: [
      {
        id: 1,
        content:
          "Eshwari dhyana is come from a good old Shaktha tradition, Eshwari Dhyana is described as a simple, natural, effortless Dhyana technique that doesn't involve much concentration.",
      },
    ],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
  },
];

export default function EshwariDhyana() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Eshwari Dhyana"
            specialTitle=""
          />
          <div className="text-justify">
            <p>
              Eshwari dhyana is come from a good old Shaktha tradition, Eshwari
              Dhyana is described as a simple, natural, effortless Dhyana
              technique that doesn't involve much concentration. One uses a
              Powerful Energized Dhyana mantra as a vehicle to let the mind
              settle down naturally in its source .
            </p>
            <p>
              In this regard, the main goal of Eshwari Dhyana is to have one's
              thoughts in the present moment, the process involves transcending
              thought itself and experiencing a state of pure awareness in which
              one is aware but without an object of thought or feelings, a
              subjective experience during meditation are clearly reflected in
              the contrasting neurophysiologic states associated with each
              practice. Eshwari Dhyana has been found to activate the brain's
              default mode network, which is a natural resting state of the
              brain regular practice of Eshwari Dhyana can result in a state of
              cosmic consciousness, in which the experience of transcendence is
              always present in one's awareness, even during activity, with
              greater clarity and focus, One comes to experience one's self as
              universal and omnipresent. One's identity shifts from the
              individual to the cosmic. Eshwari Dhyana is a simple , effortless
              yet effective Shaktha method
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
