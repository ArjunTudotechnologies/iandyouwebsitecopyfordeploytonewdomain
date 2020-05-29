import React from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import RegisterDarkCard from "../../components/RegisterDarkCard/RegisterDarkCard";
import { Container, Row, Col } from "react-bootstrap";
import { FaBrain, FaUser, FaHeart } from "react-icons/fa";
import EshawariKriya from "../../assets/img/small-banners/img-1.jpg";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import Gallery from "../../components/Gallery/Gallery";
const slides = [
  {
    id: "1",
    title: "Eshwari Kriya",
    subTitle: "Celebrate Life",
    desc: [{
      id: "1",
      content: "",
    },],
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

const projects = [
  {
    id: "1",
    title: "I And You Green",
    smallTitle: "Projects",
    link:"#"
  },
  {
    id: "2",
    title: "I And You She's Divine",
    smallTitle: "Projects",
    link:"#"
  },
  {
    id: "3",
    title: "Eshwari Bala Vidhya Mandira",
    smallTitle: "Projects",
    link:"#"
  },
  {
    id: "4",
    title: "I And You Vidhya",
    smallTitle: "Projects",
    link:"#"
  },
  {
    id: "5",
    title: "Sanskar",
    smallTitle: "Projects",
    link:"#"
  },
  {
    id: "6",
    title: "I And You Ayurveda",
    smallTitle: "Projects",
    link:"#"
  },
  {
    id: "7",
    title: "Monument Restoration Project",
    smallTitle: "Projects",
    link:"#"
  },
  {
    id: "8",
    title: "I And You Sattva",
    smallTitle: "Projects",
    link:"#"
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
          <Row className="content-features">
            <Col md={4}>
              <div className="content-card">
                <FaBrain />
                <h2 className="title">On the mind level </h2>
                <ul>
                  <li>Reduces mental fatigue (strain)</li>
                  <li>
                    Improvises concentration drastically and keeps you focused
                  </li>
                  <li>
                    Keeps you free of stress and psychosomatic disorders caused
                    due to stress
                  </li>
                  <li>Provides contentment and peace of mind </li>
                  <li>Increases memory,skill and creativity.</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="content-card">
                <FaUser />
                <h2 className="title">On the physical level</h2>
                <ul>
                  <li>Keeps you healthy and fit.</li>
                  <li>
                    Stimulates energy throughout the body and aids inner
                    balance.
                  </li>
                  <li>
                    Rejuvenates tired cells, helping in reducing early signs of
                    aging.
                  </li>
                  <li>
                    Keeps you active throughout the day and maintains energy
                    level for 16 hours in optimum.
                  </li>
                  <li>Strengthens Immunity.</li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="content-card">
                <FaHeart />
                <h2 className="title">On interpersonal relationships</h2>
                <ul>
                  <li>Maintains harmony in relationships.</li>
                  <li>
                    Creates a conducive environment within your surroundings.
                  </li>
                  <li>Unfolds unconditional love. </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-gray-1">
        <Container>
          <Row>
            <Col md={8}>
              <h2 className="big-title mb-5">
                Celebrate life through Eshwari kriya
              </h2>
            </Col>
            <Col md={4}></Col>
          </Row>
          <div className="text-justify">
            <p>
              I often tell my Sadhaks to Celebrate life, life is a celebration,
              it's a celebration by default but, why then are we struggling to
              lead a happy life ? why are we suffering ? why does it feel as if
              life is a misery ? It’s because we do not know the management, you
              may be a management student or an expert in objective world but
              life is a subjective world, so to celebrate life one must know the
              management of Body, Mind and Emotions for that one should have
              five types of strength which are already present but needs to be
              strengthened consciously without strengthening it one cannot
              experience the absolute truth, in sanskrit we call it as Bala
              (Strength) there are basically five types of Bala or Strenght or
              Power, the first one is Deha Bala which means Physical Strength ,
              the second one is Mano Bala meaning Psychic Strength , the third
              one is Budhi Bala means Intellectual strength or Power , the
              fourth one is Athma Bala meaning the Power of the inner being and
              fifth one is very important that is Dhiva Bala means the power of
              the divine.
            </p>
            <p>
              You might be powerful or strong enough physically, mentally and
              intellectually but weak in terms of power of the inner being, then
              you cannot experience success in the meantime if you are strong at
              all above said four types of strengths but missing the cosmic
              support or divine’s grace and blessings even then one cannot
              experience success, here i am mentioning success in that context
              meaning happy, healthy,wealthy and holistic life.
            </p>
            <p>
              To lead a holistic life one must strengthen the above five
              strengths. Eshwari Kriya is such an unique yogic technique which
              brings inner alignment in your body, mind, and energy which
              results in gaining the five strengths and leads to holistic
              living.
            </p>
            <p>
              Eshwari Kriya is a SHAKTHA method of KUNDALINI activation, Shaktha
              means the one who follows, practices and reveres the Feminine
              cosmic energy . There are three types of feminine cosmic energy
              activation, which is very secret and sacred the activation is only
              possible through Guru-Shishya Parampara (lineage of master and
              disciple relationship ) in the scriptures it is said that
            </p>
            <p>
              <b>"TRIVIDHA KUNDALINI SHAKTHI STHREE DEVANAN CHA SRUSTAYE"</b>{" "}
              there are three types of Kundalini energy the first one is CHITH
              Kundalini , the second one is PRANA kundalini and the third and
              ultimate is PARA kundalini so I will explain about the details of
              Kundalini later, through Eshwari Kriya with the blessings of
              divine will activate your Chith kundalini first, which gives lead
              to the other two kundalini activation.
            </p>
            <p>
              Intentionally i do not want to talk more about the Kundalini
              activation because it has the most corrupted, manipulated and
              wrongly understood, the western world has manipulated and
              dissolved the entire method and the purpose of kundalini
              activation to their limited understanding such as, they ask the
              sadhaks to imagine the colors, visualize the petals or they use
              some hypnosis methods etc etc .., i personally and so does our
              schools of yoga tantra disagree with such incorrect methods of
              activation, the right method and authentic yoga tantra methods are
              very secret and sacred techniques, Eshwari Kriya is one among such
              simple yet powerful and effective technique.
            </p>
            <p>
              To celebrate life and to lead a holistic lifestyle, Eshwari Kriya
              is a boon to the mankind.
            </p>
            <p>
              <b>
                <span
                  clasName="lora-text"
                  style={{ fontFamily: "Lora", fontSize: "20px" }}
                >
                  - Sri Prasad
                </span>
              </b>{" "}
              <br />
              &nbsp;&nbsp;&nbsp;Jai Guru Dev
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row className=" d-flex align-items-center justify-content-center">
            <Col md={7}>
              <p>
                <b>
                  ESHWARI KRIYA is a time-tested practice that cultivates
                  boundless levels of Emotional, Psychological and Physical
                  fitness. It’s a busy and Competitive world we live in today
                  with increasing demands on employers and employees alike. We
                  work long hours, often hunched over a computer. We skip meals,
                  keep a phone glued to our ear, and rarely leave our workspace
                  for a break. Before long, these work habits begin to take
                  their toll on our bodies and minds in the form of stress,
                  tension and sickness and while a mild amount of stress can
                  help us meet deadlines, too much stress, or constant stress,
                  can interfere with numerous physical and mental abilities. How
                  we respond to stress can have a significant impact on our
                  total health. ESHWARI KRIYA can remove stress from the body
                  and mind.
                </b>
              </p>
            </Col>
            <Col md={5}>
              <img
                className="img-fluid br-10 shadow-lg"
                src={EshawariKriya}
                alt="Eshwari Kriya"
              />
            </Col>
            <Col md={12}>
              <h2 className="title mt-5 mb-4">
                ESHWARI KRIYA Programs Have Many Benefits, 20 minutes regular
                practice of Eshwari kriya will create
              </h2>
              <ul>
                <li>
                  Employees that are happy and full of energy, and as a result,
                  more productive
                </li>
                <li>Decline in stress-related sick occurrences</li>
                <li>
                  Improved concentration, decision-making skills and ability to
                  multi-task
                </li>
                <li>
                  Improves employee alertness and ability to react more calmly
                  in demanding situations
                </li>
                <li>
                  Relief of head, neck and back strain, carpal tunnel syndrome,
                  insomnia, high blood pressure and work-related injuries from
                  repetitive motion
                </li>
                <li>Better customer service</li>
                <li>
                  one can maintain 16 hours of optimum energy level to perform
                  well
                </li>
                <li>Enhanced employee attitude and outlook</li>
                <li>
                  General well-being in the workplace which reduces employee
                  turnover
                </li>
                <li>
                  The Body , Mind and Emotional management is a part of Kriya
                </li>
              </ul>
              <p>
                <b>
                  In simple statement we would say that ESHWARI KRIYA is a
                  perfect tool for Happy ,Healthy, Prosperous and Successful
                  life Celebrate life through Eshwari Kriya. To celebrate life
                  and to lead holistic life style Eshwari Kriya is a boon to the
                  mankind.
                </b>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <RegisterDarkCard
        title="Celebrate Life"
        desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that."
      />
      <section className="bg-light-gray-1">
        <div className="text-center">
          <Heading title="Our Projects" smalltitle="projects"/>
        </div>

        <Container fluid>
          <Row>
            {projects.map(function (slide) {
              return (
                <Col md={4}>
                    <ProjectsCard key={slide.id}
                      title={slide.title}
                      smallTitle={slide.smallTitle}
                      link={slide.link}
                    />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <Gallery/>

      <Footer />
    </div>
  );
}
