import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../assets/img/cards/sri-prasad-guruji.jpeg";
import Heading from "../../../components/Heading/Heading";
import SocialIcons from "../../../components/SocialIcons/SocialIcons";

export default class AboutGuruji extends Component {
  render() {
    return (
      <>
        <section>
          <Container>
            <Row className="d-flex justify-content-center align-items-center pb-3">
              <Col md={5}>
                <img className="about-img" src={Image} alt="Sri Prasad" />
              </Col>
              <Col md={7}>
                <Heading smalltitle="About" title="Sri Prasad" />
                <p>
                  Sri Prasad, one of the eminent new age master of Spiritual
                  Yogic Science, imparting knowledge through Yogic Science in
                  the name of Eshwari sadhana. His vision to create a
                  disease-free, stress-free and as a whole a holistic society,
                  has brought millions together in India and overseas.
                </p>
                <h3 className="title-small">Path Towards Spirituality</h3>
                <p>
                  Running down through the life and journey of Sri Prasad and
                  explore a little about how he imparted the most secret of
                  spiritual knowledge Sri Vidhya through Yogic Science, and the
                  founding of <b>I and You Being Together Foundation</b> which
                  also involves various humanitarian service oriented
                  activities.
                </p>
                <SocialIcons />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-light-gray-1">
          <Container>
            <p>
              <b>His childhood:</b> Having born to a hindu family he would
              perform rituals with his mother, was being brought up in an
              islamic neighbourhood and had learnt and practiced Islamic rituals
              gaining knowledge of Quran, he also studied in a Christian
              institution and would attend gatherings in the church every
              weekend to gain knowledge from Bible. His mother was an orthodoxly
              religious person while his father, a practical man who mostly
              believed in social service than performing rituals. Being born a
              hindu and having experienced diverse religions he had learnt to
              selflessly serve humanity from his father.
            </p>
            <p>
              As the journey continued his first lesson in spirituality came
              from his father at the age of 5, who was a practitioner of BKS
              Iyengar Yoga who had then introduced him to yoga, having quested a
              long way he was actively involved in civil community services
              throughout his adolescence such as Scouts, NCC and staging various
              Street plays to protest and bring awareness to the general public.
            </p>
            <p>
              With the urge to acquire more knowledge about the yogic science he
              had learnt from various siddhas and yogis which had brought him to
              a conclusion that something greater was awaiting his upliftment;
              away from stereotypical religious life to selfless spiritual
              living. Finally the questions that changed the course of his life.
              Does God really exist? If he exists then why are people suffering?
              The craving to find answers to his questions had finally reached a
              peak.
            </p>
            <p>
              On the 27th day of aug 2007 on lunar eclipse, a full moon night
              under the bright rays of the moon he had seated with closed eyes
              and as the earth blocked the way of light darkening the rays of
              moon during total lunar eclipse that had encompassed light, the
              prevailing darkness which had eventually tarnished the eclipse in
              his mind which had blocked him; at Rudragavi (the cave of Rudra),
              a cave in Siddarabetta (the mystic’s hill), having seated secluded
              with closed eyes he had forgotten himself for 36hours unknown of
              the time and space, those moments had finally brought him to
              realisation of existential cosmic and self reality that eventually
              had changed his quest for spiritual seeking that God really exists
              and each individual is responsible for his/her own sufferings and
              he had also found the remedy for those sufferings through free
              counselling twice a week using traditional methods and therapeutic
              benefits of scientific Healing, traditional Counseling techniques,
              Astro science and Traditional Alternative medication and Eshawri
              sadhana from which millions of people have been benefited.
            </p>
            <p>
              <b>His Personality:</b> The impact of realisation gave rise to
              Eshwari Sadhana. Sri Prasad who began teaching Yogic Science in
              2012 by the name Eshwari Kriya. ‘Eshwari Kriya’ a unique yogic
              20min technique derived from age old scripture called ‘Vigyan
              Bhairav Yoga Tantra’ which means the technique of unifying with
              the universal consciousness. Eshwari Sadhna (Sri Vidya) movement
              which includes higher levels of meditations and workshops has been
              practiced by approximately 200000 people in India and overseas.
            </p>
          </Container>
        </section>
        <section>
          <Container>
            <h2 className="title-small">Founding of an Organization: </h2>
            <p>
              Sri Prasad has established an organization in 2012 and named it “I
              and You Being Together Foundation”, a non -profit making,
              non-religious and volunteer organization that aims in bringing
              stress-free, disease-free, violence-free and self-realization in
              individuals to form a holistic society. I and You Being Together
              foundation has its main office in Bangalore-Karnataka, India and
              has established its branches in several states of India and
              <b>26 countries</b> overseas
            </p>
            <p>
              “If just one person does service unto mankind it is not enough, if
              the same person inspires, motivates and encourages many others to
              serve the mankind such service becomes a Divine Service(Eshwari
              Seva)”.
            </p>
            <p>
              The founder speaks thus…. ‘I’ here stands ahead leading and
              feeling responsible to bring the change in self and then can ‘I’
              can count on ‘You’ thus ‘I and You” together can bring the change.
            </p>
            <p>“Only two can bring the change that is I and you”</p>
            <p>
              The organization functions under the thriving service of its
              volunteers from various countries and has illumined the lives of
              several million people.We wish to serve humanity to the maximum
              and with that we wish to create a holistic world free of disease
              and stress
            </p>
            <p>
              Welcome home to the family of fellowship, unity and camaraderie
              within whose walls lie all qualities of togetherness.
            </p>
            <p>
              We from I and You Being Together Foundation stand firm in reaching
              you where you presently are. Let us together walk hand in hand
              towards Progress and Well-being -SANGACHADWAM.
            </p>
          </Container>
        </section>
      </>
    );
  }
}
