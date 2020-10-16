import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import Heading from "../../components/Heading/Heading";
import { Container, Row, Col } from "react-bootstrap";

const slides = [
  {
    id: "1",
    title: "Eshwari Shodhana Kriya",
    subTitle: "",
    desc: [
      {
        id: "1",
        content:
          "Eshwari Shodhan kriya has three techniques to cleanse our Body and the Mind , they are Nyasa sadhana a 10 minutes super recharge method and in Shodhana kriya Neti and Vamana Dhuti to clear and cleanse our sinus and internal organs",
      },
    ],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
  },
  {
    id: "2",
    title: "Nyasa Sadhana",
    subTitle: "",
    desc: [
      {
        id: "1",
        content:
          "Nyasa is a 10 minutes Super speed recharge method to regain the energy which was lost due to strain and stress",
      },
    ],
    bannerImg: "eshwari-shakthi-kendra-sadhana.png",
  },
  {
    id: "3",
    title: "Shodhana Kriya",
    subTitle: "",
    desc: [
      {
        id: "1",
        content:
          "In the Yogic journey our body needs to be kept strong and healthy that becomes the base for whole practices of Sadhana.",
      },
    ],
    bannerImg: "kids.png",
  },
];

export default function EshwariShodhanaKriya() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Eshwari Shodhana Kriya"
            specialTitle=""
          />
          <p>
            Eshwari Shodhan kriya has three techniques to cleanse our Body and
            the Mind , they are Nyasa sadhana a 10 minutes super recharge method
            and in Shodhana kriya Neti and Vamana Dhuti to clear and cleanse our
            sinus and internal organs
          </p>
        </Container>
      </section>
      <section className="bg-light-gray-1">
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Nyasa Sadhana"
            specialTitle=""
          />
          <p>
            Nyasa is a 10 minutes Super speed recharge method to regain the
            energy which was lost due to strain and stress
          </p>
          <p>
            In a strain and stressful life style the 10 minutes of NYASA can
            play an important role, it can play in preparing the body and mind
            to enter a meditative state.
          </p>
          <p>
            when one take the attention to various energy centers (36 centers)
            on the body, we activate the nervous system which helps to relax and
            enhances the potential of the nervous system to function optimum
          </p>
          <p>
            Nyasa is like a ‘super nap’ that recharges in no time. It is a
            complete rejuvenation package, one must to relieve in our daily
            stress and busy life
          </p>
          <p>
            Nyasa help to activate the <b>relaxation</b> response and improve
            the functioning of your nervous system and endocrine system, which
            affects your hormones. Both meditation and yoga nidra help cells
            regenerate and repair, and both help decrease anxiety and improve
            your mood.
          </p>

          <p>
            Nyasa is a powerful 10 minute technique for controlling your body's
            relaxation response. Nyasa can be as restorative as sleep, while you
            remain fully conscious, Cultivate conscious relaxation, ease ongoing
            stress and anxiety, and feel your body melt away into a soothing
            state of being.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Shodhana Kriya"
            specialTitle=""
          />
          <p>
            In the Yogic journey our body needs to be kept strong and healthy
            that becomes the base for whole practices of Sadhana. The base here
            we talking for our body is the
            <b>cleansing of our internal system of organs.</b> In the yogic
            tradition, this cleansing is known as{" "}
            <b>Shatkarma or Shat kriyas</b>
          </p>
          <p>
            To make sure the healthy & proper functioning of the body as a
            whole, the cleansing of organ systems is very important on a regular
            basis. Traditionally, there are 6 method yogis used for cleansing of
            internal organs for a healthy body is called as Shatkarma
          </p>
          <Row className="justify-content-md-center mt-4 mb-3">
            <Col md="9">
              <h2 className="text-center special-title">
                Dhautirbastistathā netistrātakam naulikam tathā
                Kapālabhātiśchaitāni shatkarmāni prachakshate – Hata Yoga
                Pradipika 2.23
              </h2>
            </Col>
          </Row>
          <p>
            <b>Meaning –</b> Dhauti, Basti, Neti, Trataka, Nauli and Kapalabhati
            are called shatkarma.
          </p>
          <p>
            Eshwari shodhana Kriya is a method of Shatkarma,it is a set of 6
            preparatory practices used by ancient yogis to purify the body
            internally, thus prepare them for higher practices of Eshwari
            Sadhana
          </p>
          <p>
            The term Shatkarma is originally taken from the Sanskrit language,
            which has 2 root words: Shat & Karma. Shat means <b>“Six”</b> &
            karma here is referred to as{" "}
            <b>“Action performed to achieve some desired results“.</b>
          </p>
          <hr />
          <ul class="number-lists">
            <li>
              It is important for a Sadhak to purify their inner body organs
              from time to time so as to make sure the proper working of yogic
              sadhana on the body. Shatkarma removes impurities of internal body
              organs which got accumulated by regular intake of external matter
              through different sensory organs.
            </li>
            <li>
              To make sure the proper flow of Prana (life force) ESK ensures
              there isn’t any physical/mental knot present in Nadis. Shatkarma,
              especially Kapalbhati & Nauli balances Prana flow within two
              important Nadis i.e. Ida & Pingala.
            </li>
            <li>
              Usually, our mind is cluttered from many unwanted thoughts which
              in the yogic language are called Vrittis. By the practice of ESK,
              we can bring a state of steadiness in mind. There are mainly 2
              traditional texts “Hatha Yoga Pradipika” & “Gheranda Samhita” that
              have described ESK in a detailed manner. Whereas both texts belong
              to the teachings of Hatha Yoga, their idea of performing ESK is
              completely different.
            </li>
          </ul>
          <p>
            According to Sage Gheranda, our body & mind is like a vessel
            (combinedly called as Ghata) that carry our soul & characteristics
            Gunas as water inside a vessel. <b>Ghatastha Yoga</b> firstly aims
            to purify the body or vessel that carries a soul, through 6
            purification techniques contains in Shatkarma. This purification of
            body & mind is termed in Gheranda Samhita as <b>Ghata Shuddhi.</b>{" "}
            Thus, the practice of ESK is important for every person who has just
            begin the journey of yoga as per Gheranda Samhita.
          </p>
        </Container>
      </section>

      <section className="bg-light-gray-1">
        <Container>
          <h2 className="sub-title mt-5 mb-3">
            1. Dhauti(Vamana) – Cleansing of Digestive Tract
          </h2>
          <p>
            Dhauti is the first that literally translates as <b>‘washing‘.</b>{" "}
            In this kriya, different techniques are used to flush out toxic &
            undigested food particles from internal organs. Some common types of
            Dhauti are:
          </p>
          <ul className="dots-lists">
            <li>
              Vamana Dhauti – Drinking a large quantity of lukewarm water and
              then vomit it out to removes extra mucus from the food pipe. Also
              called Kunjal kriya.
            </li>
            <li>
              Vamana Dhauti – Drinking a large quantity of lukewarm water and
              then vomit it out to removes extra mucus from the food pipe. Also
              called Kunjal kriya. The mechanism of Dhauti helps the internal
              organ system to work efficiently & remove excess mucus from the
              stomach. Other than this, consistent practice of dhauti kriya
              balances the Kapha, Pitta & Vata dosha in our body.{" "}
            </li>
          </ul>
          <h2 className="sub-title mt-5 mb-3">
            2. Basti – Cleansing of Large Intestine
          </h2>
          <p>
            Basti is second in the sequence of ESK that treats almost 50% of
            abdominal diseases.
          </p>
          <p>
            It directly works on the purification of the central organ of the
            body called colon (large intestine) that nourishes almost all
            tissues of body.
          </p>
          <p>
            Unlike enema which cleans only lower 8 to 10 inches of colon, Basti
            purifies the whole colon system to the rectum (attached to the
            anus). The colon is a long tube-like organ in the lower belly that
            removes water from digested food and is mostly disturbed by solid
            waste (feces).
          </p>
          <p>
            <b>Types of Basti:</b>
          </p>
          <p>
            Basti is basically two types based on the procedure of practices:
            <b>Sthala Basti</b> and <b>Jala Basti.</b> In both techniques, water
            is drawn in through anus in the large intestine and then abdominal
            muscles are churned while holding water inside. After churning,
            water expelled out through the anus.
          </p>
          <h2 className="sub-title mt-5 mb-3">
            3. Neti – Cleansing of Nasal Passages
          </h2>
          <p>
            Neti is the third Shatkarma that deals with purifying nasal cavities
            from accumulated impurities. it’s very important to clear the nasal
            cavities as it’s the pathway to Prana we take through breathing.{" "}
          </p>
          <p>
            Breathing works like fuel to charge up the human body. If the fuel
            (breathing) is dirty by any reasons it can make us sick. unclean
            nostrils are could be one of the main reasons for irregular
            breathing.{" "}
          </p>
          <p>
            Neti is the exercise intended for purification of Sinus by the
            various techniques.{" "}
          </p>
          <p>Neti is basically of 2 types, based on their procedure. </p>
          <ul className="dot-lists">
            <li>
              <b>Jala Neti</b> – In this neti, Jala (water) is used as a
              cleaning tool to remove the impurities of nostrils. Using the neti
              pot, water is poured in through one nostril & then under the
              effect of gravity, it’s expelled out another nostril. Water that
              comes out from other nostril removes impurities from nasal
              pathways.{" "}
            </li>
            <li>
              <b>Sutra Neti</b> – In this neti, a rubber thread (sutra) is used
              to massage the nasal pathways in such a manner that it opens any
              blockages present in nostrils.
            </li>
          </ul>
          <h2 className="sub-title mt-5 mb-3">
            4. Trataka – Cleansing of Eyes
          </h2>
          <p>
            The most common object used in Trataka for reference point is an
            Illuminated Lamp. Trataka is known for its simple procedure.
            Consistent & correct practice of trataka increases concentration
            power and purifies the mind from fluctuated thought patterns. Base
            on the reference thing to gaze upon, whether you take an external
            object or internal point, trataka can be classified into 2
            categories.
          </p>
          <ul className="dot-lists">
            <li>
              <b>External Tratak( Bahya Trataka)</b> is the practice of gazing
              on some external objects continuously, to bring stability in the
              mind , to increase concentration and focus
            </li>
            <li>
              <b>Internal Tratak (Anthar Trataka)</b> is when the focus is kept
              inward. Internal trataka helps to awaken the third eye or Ajna
              chakra
            </li>
          </ul>
          <h2 className="sub-title mt-5 mb-3">
            5. Nauli – Cleansing of Abdominal Organs{" "}
          </h2>
          <p>
            The movement of the lower abdominal muscle is ensured that stimulate
            the Jatara agni (digestive fire ){" "}
          </p>
          <p>
            Nauli practice purifies the liver, spleen, urinary bladder,
            pancreas, gall bladder and the intestines by its massaging effect.
            When all these internal organs regularly movements, the practitioner
            digestion system and appetite improve.
          </p>
          <p>
            In Nauli kriya, rectus abdominis or abs muscles are isolated either
            left or right or at middle of the linea alba (anterior wall in the
            abdomen) On taking linea alba as a middle reference, the isolation
            of abs muscles on either side of it classifies Nauli into 3 types.
          </p>
          <ul className="dots-lists">
            <li>
              <b>Madhya Nauli</b> – When left and right both sides abs muscles
              concentrated at the center wall or linea alba
            </li>
            <li>
              <b>Vama Nauli</b> – When both abs muscles are aligned left side
              from center wall.
            </li>
            <li>
              <b>Dakshina Nauli</b> – When both abs muscles are aligned right
              side from the center wall.
            </li>
          </ul>

          <h2 className="sub-title mt-5 mb-3">
            6. Kapalbhati – Cleansing of Frontal Lobes
          </h2>
          <p>
            Kapalbhati is the last Shatkarma that works on improving the
            functioning of the brain. Because kapalbhati practiced by yoga
            practitioners as breathing techniques so it’s also known by
            Kapalabhati pranayama. In kapalbhati, abdominal wall rapidly draws
            in and out in conjunction with breathing.
          </p>
          <p>
            Here, in Kapalbhati pranayama, the breathing is quite different from
            normal breathing. In normal breathing,
          </p>
          <ul>
            <li>
              Inhale is active (more focused) while the exhale is passive (less
              focused). In Kapalbhati breathing,
            </li>
            <li>
              Exhale is active (more focused) while the inhale is passive (less
              focused). By emphasizing more on exhaling as compare to inhaling,
              kapalbhati expels more impurities out
            </li>
          </ul>

          <h2 className="sub-title mt-5 mb-3">
            Benefits of Eshwari Shodhana Kriya
          </h2>
          <p>As to balances the internal & external organ systems. </p>
          <p>The ESK helps to balance the Tri Doshas . </p>
          <p>
            ESK is helpful to channelize the flow of Prana in Nadis. It helps to
            clean the blockages of Nadis{" "}
          </p>
          <p>ESK is helpful in the Immune system development </p>
          <p>
            Physical aging and Biological aging are two different aspects. When
            our body isn’t clean then it brings physical aging that is pretty
            earlier from the Biological aging. ESK helps to retarded Physical
            aging and helps to maintain biological aging.{" "}
          </p>

          <p>Celebrate Healthy life with Eshwari shodhana kriya </p>

          <p>Eligibility : Eshwari Kriya </p>

          <p>
            <b>
              Note : Eshwari shodhana kriya we will teach and train Nyasa method
              , Neti and Vamana Dhuti , rest Kriya techniques are incorporated
              in our other Sadhanas as a part of sadhana{" "}
            </b>
          </p>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
