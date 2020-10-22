import React from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import { Container, Row, Col } from "react-bootstrap";

const slides = [
  {
    id: "1",
    title: "Sri Yog",
    subTitle: "Hatha Yoga Teacher Training",
    desc: [],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
  },
];

export default function SriYog() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Sri Yog - "
            specialTitle="Hatha Yoga Teacher Training "
          />
          <div className="text-justify">
            <p>
              In the magnificent setting of the busy life commence to the
              soulful wisdom of yogic science, under the esteemed guidance of
              venerated Sri Prasad Guruji get yourself introduced to the world
              of spirituality and wellness by submerging deep into the holistic
              learning of yoga. Delve deeper with the transformative course
              Known as Sriyog a Hata Yoga Teacher Training, at I and You Being
              Together Foundation (R)
            </p>
            <p>
              The school of <b>Sriyog</b> is founded by Guruji Sri Prasad, a
              profound Srividhya Yoga Tantra Master , who is fully established
              in the Self. Our school seeks to expand the world’s understanding
              of yoga through an education and training that are steeped in the
              Shaktha tradition – the original roots of yoga – and a long
              lineage of masters while making yoga accessible and applicable for
              modern day use for people of all ages, abilities, cultures and
              religions.
            </p>
            <p>
              Through a comprehensive and multi-dimensional science-based
              education, our school’s course teaches about and integrates all
              paths of yoga including Hatha yoga (effort), Raja yoga
              (effortless, royal) Gyana yoga (wisdom), Karma yoga (service &
              action), Bhakti yoga (love & devotion) and more.
            </p>
            <p>
              The primary elements of our training are Asanas (postures),
              Pranayamas (breathing techniques), Mudra (postures) meditation
              (Dhyana) and the experience and application of yoga. Course
              graduates undergo rigorous training and are equipped with a deep
              and personal understanding and experience of yoga that enables
              them to bring these different dimensions of yoga to their
              students.
            </p>
            <p>
              The simplicity of Guruji’s approach to yoga combines the
              fundamental principles of practice (sadhana), service (seva) and
              Introspection (swa-adhyaya) – this unique approach empowers
              individuals to thrive and society to blossom in human values. The
              motive of Sriyog is to create a disease free, stress free and
              Holistic living
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-light-gray-1">
        <Container>
          <Row>
            <Col md={10}>
              <h2 className="title  mt-5 mb-3">
                Benefits of the "Sriyog" HaYTT
              </h2>
            </Col>
            <Col md={2}></Col>
          </Row>
          <div className="text-justify">
            <ul>
              <li>Achievement of Greater self-awareness and consciousness</li>
              <li>Ability to synergize one’s mind, body and inner being</li>
              <li>Holistic understanding of the philosophy of yoga</li>
              <li>
                Understanding Yogic Stress management, prevention of stress
                related ailments
              </li>
              <li>Introduction to anatomy, Sanskrit and Ayurveda (optional)</li>
              <li>
                Improved health quotient in all levels-physical, mental,
                intellectual, emotional and Spiritual
              </li>
              <li>
                Empowerment and opportunity to serve the society through our "I
                and You Seva" activities
              </li>
              <li>Yoga philosophy taught by our our GURUJI </li>
              <li>Understanding in detail of the anatomy of asanas</li>
              <li>
                Learning in detail the teaching methodology so that you are
                empowered to be an excellent <b>Sriyog instructor</b>
              </li>
              <li>
                Would learn more types of Yoga like{" "}
                <b>Kids yoga, Eshwari Kids Kriya and corporate Yoga</b> for more
                versatility in teaching
              </li>
            </ul>
            <p>
              <b>Sriyog</b> enthusiasts join the course with different aims and
              aspirations, some want to be a yoga teacher while others desire to
              perceive a deeper yogic knowledge. Whatever the intention and
              goals, they surely get fulfilled at <b>Sriyog</b> teacher
              training. The curriculum of the program is the way to get started
              and is designed keeping in mind the standard of yoga alliance by
              the renowned yoga teachers and traditional gurus.
            </p>
            <h2 className="title mt-5 mb-3">Highlights of the Curriculum</h2>
            <ul>
              <li>
                Get acquainted with the deeper knowledge of Yoga’s history with
                the detailed study of Yoga Philosophy.
              </li>
              <li>
                Introduction to the various asana types along with detailed
                knowledge of the asanas both practically and theoretically.
              </li>
              <li>
                Know more about the Human body and understand its working with
                the study of an anatomical structure during Yoga Anatomy
                session.
              </li>
              <li>
                The prime focus of the training shall be on the traditional
                yogic teachings of Hatha Yoga, Ashtanga Yoga, Vinyasa Yoga,
                Karma Yoga, and more...
              </li>
              <li>
                Learn about the crucial role of respiration in the body, and
                know how to control breath during Pranayama practice.
              </li>
              <li>
                Go through the understanding of the yogic way of life with
                Guruji by studying various ancient texts and yogic scriptures
                including Yoga Sutras of Patanjali, Hatha Yoga Pradipika, and
                more.
              </li>
              <li>
                Prevent injuries and pursue a safer and correct practice, and
                bring in perfection with the study of Adjustment and Alignment.
              </li>
              <li>
                Learn and practice the art of bringing the mind into a state of
                calmness and body into relaxation with Meditation.
              </li>
              <li>
                Engage in availing the practical knowledge of being a Sriyog
                Teacher during the well-guided sessions of Teaching Methodology.
              </li>
              <li>
                Learn about the <b>Sriyog</b> ethics and principles of yoga and
                implement the same in your life.
              </li>
              <li>
                Get illuminated under the spiritual light of the holistic
                practice during various spiritual activities.
              </li>
              <li>
                The training also bestows you with the knowledge of Ayurveda,
                the way of Sattvic living, and about its healing power
                (optional)
              </li>
              <li>
                Get well aware of the internal yogic cleansing and purification
                process with Shat kriya.
              </li>
              <li>
                The highlights of <b>Sriyog</b> :
              </li>
              <li>Two Types Of Surya Namaskara</li>
              <li>Two Types Of Chandra Namaskara</li>
              <li>Yogic Sequence For Hypertension and Diabetics</li>
              <li>Yogic Sequence For Hormonal imbalance Thyroid & PCOD</li>
              <li>Yogic Sequence For Noticeable Weight Loss</li>
              <li>Yogic Sequence For Back, shoulders and neck Pain</li>
              <li>Yogic Sequence For Genaral Good Health</li>
              <li>Different Types To Pranayama</li>
              <li>Science Of Yogic Mudra</li>
              <li>Shat karma (Kriya) for body and mind cleansing </li>
              <li>
                Patanjali yoga sutra , Hatayoga pradipika and Bagavath geetha
              </li>
              <li>
                <b>Sriyog</b> The unique approach empowers individuals to thrive
                and society to blossom in human values. the motive of{" "}
                <b>Sriyog</b> is to create a disease free, stress free and
                Holistic living
              </li>
            </ul>
            <p>
              <b>
                <span
                  clasName="lora-text"
                  style={{ fontFamily: "Lora", fontSize: "20px" }}
                >
                  - Sri Prasad
                </span>
              </b>
              <br />
              &nbsp;&nbsp;&nbsp;Jai Guru Dev...
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
