import React from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import RegisterDarkCard from "../../components/RegisterDarkCard/RegisterDarkCard";
import { Container, Row, Col } from "react-bootstrap";
import { FaBrain, FaUser, FaHeart } from "react-icons/fa";
const slides = [
  {
    id: "1",
    title: "Eshwari Kriya",
    subTitle: "Celebrate Life",
    desc: [],
    bannerImg: "../../assets/img/banners/kids-5.png",
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
    bannerImg: "../../assets/img/banners/kids-5.png",
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
    bannerImg: "../../assets/img/banners/kids-5.png",
  },
];

export default function EshwariKriya() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} />
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Eshwari Kriya, "
            specialTitle="celebrate life"
          />
          <div className="text-justify">
            <p>
              <b>
                This information is from guruji when one of our sadhaks raised
                the question before the workshop , the question was{" "}
              </b>
            </p>
            <p>
              <b>
                Sadhak: Guruji what is Eshwari Kriya ? Is it a Breathing
                technique, Yoga or Meditation, Hypnosis or Healing ?
              </b>
            </p>
            <p>
              Guruji: So many questions at once, i will answer your questions by
              raising a question
            </p>
            <p>
              What was the 1st immediate act that you performed after your birth
              ?
            </p>
            <p>
              Most people say that their act was Crying and i hope most of us
              will agree with that but if you ask me, I would say it’s a big No,
              do you know why ? because the 1st immediate act which we perform
              was Breathing , we inhale the air to our system, the air which we
              inhale is not only the oxygen , in our yogic science we call it as
              Prana, Prana means Life or Life force energy in the mother's womb
              you were alive but there was no breathing , here you have to pay
              enough attention to understand this yogic science, there was no
              breathing in the mother's womb but you and i were alive with the
              grace and love of our biological mother and the cosmic mother,
              once you came out from the womb to experience and to fulfill your
              purpose of life, the breathing will connect you with the cosmos.
            </p>

            <p>
              The breath is the bridge between you and the body, meanwhile its
              also the bridge between you and the nature ,with the proper use of
              Breath, yogic science and the profound unique yogic techniques ,
              one can manage and handle or bring balance in their physical ,
              mental and emotional level of their existence and when the
              thoughts, emotions and actions, the basic fundamental instincts of
              your being has been taken care then one can lead a happy, healthy,
              prosperous and successful life .
            </p>

            <p>
              Now the question is how can one take care of thoughts ,emotions
              and actions which is beyond our control, actions can be taken into
              control but how about thoughts and emotions? The thoughts and
              emotions leads to an action , the intension and the intensity of
              the intention is what makes thoughts materialize, so from here
              onwards the spiritual journey will start, when i say spiritual
              people often think and analyze on the dimension of religion, the
              religion is not at all spirituality, religion is a belief , a
              system of belief, belief on some other realized person's
              experience but the experiences are not your experience, so
              spiritual science is that science which makes a person to rise
              from the level of belief to the height of self experience;so here
              i am not denying or defaming the religious belief, in the mean
              time i am not even recommending to blindly following it, my
              intention is very much lucid, the intention or the motive behind
              it is just to make you lead a happy, healthy, prosperous and
              successful life ,the intention is just to make you experience your
              existential and the supreme reality of the cosmos, without going
              against to your religious beliefs’, i will make you lead a
              meaningful , useful and well lived with the support of yogic
              science which is Non- Religious.
            </p>
            <p>
              If anyone thinks that in the present lifestyle, social conditions
              and global challenges leading a happy ,healthy, prosperous and
              successful life is not impossible i would say No; it is very much
              possible , to make that possible the best and the simple thing one
              must do and commit to do is an individual need to invest or
              allocate or dedicate 20min everyday of one’s precious life.
            </p>
            <p>
              If you agree to do this then you are eligible to attend my
              workshop, ESHWARI KRIYA. ESHWARI means the absolute transcendental
              cosmic consciousness and KRIYA means a conscious journey towards
              it, the journey will provide you healthy body , stress free mind,
              well balanced emotions and harmony in relationships and society
              which makes your life very much successful, we have only one life
              and one chance to lead it so better lead it peacefully.
            </p>

            <p>
              Eshwari Kriya is designed on the base of profound yogic scientific
              knowledge the knowledge taken from the good old scripture called
              Vigyan Bhirava Tantra a chapter from Rudra Yamala Tantra here,
              Vigyan means science, Bhirava means Transcendental consciousness
              and the tantra literally means the technology or a technique.
            </p>
            <p>
              The benefits of Eshwari Kriya, a 20 minute profound unique yogic
              technique mainly works on 3 levels of our existence those are
              physical body , astral body and causal body in other words in and
              out of our Body ,Thoughts and Emotions.The root cause of many of
              our problems have been seen rising from these 3 main levels of our
              existence.
            </p>
            <p>
              Eshwari Kriya will brings balance between body, thoughts and
              emotions one can experience such balance within a span of 30 to 40
              days.
            </p>
          </div>
          <hr />
          <p>
            <b>Regular practice of Eshwari Kriya </b>
          </p>
          <Row>
            <Col md={4}>
              <FaBrain />
              <li>Reduces mental fatigue (strain)</li>
              <li>
                Improvises concentration drastically and keeps you focused
              </li>
              <li>
                Keeps you free of stress and psychosomatic disorders caused due
                to stress
              </li>
              <li>Provides contentment and peace of mind </li>
              <li>Increases memory,skill and creativity.</li>
            </Col>
            <Col md={4}>
              <FaUser />
            </Col>
            <Col md={4}>
              <FaHeart />
            </Col>
          </Row>
        </Container>
      </section>
      <RegisterDarkCard
        title="Celebrate Life"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that."
      />

      <Footer />
    </div>
  );
}
