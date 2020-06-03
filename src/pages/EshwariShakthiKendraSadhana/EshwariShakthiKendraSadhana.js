import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import Footer from "../../components/Footer/Footer";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import RegisterDarkCard from "../../components/RegisterDarkCard/RegisterDarkCard";
import { Container } from "react-bootstrap";
import BenifitsCard from "../../components/BenifitsCard/BenifitsCard";

const slides = [
  {
    id: "1",
    title: "Eshwari Shakthi Kendra Sadhana",
    subTitle: "",
    desc: [],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
  },
  {
    id: "2",
    title: "Eshwari Shakthi Kendra Sadhana",
    subTitle: "",
    desc: [],
    bannerImg: "eshwari-shakthi-kendra-sadhana.png",
  },
];
const benifitsOne = {
  image: "others/2.jpg",
  lists: [
    {
      id: "1",
      benifit: "Helps to clean up and cleanse our inner body.",
    },
    {
      id: "2",
      benifit: "Keeps the system in harmony and balance.",
    },
    {
      id: "3",
      benifit:
        "Enhances the capabilities of the physical body, mind, and energy system.",
    },
    {
      id: "4",
      benifit: "Gateway to open up and realize our existential reality",
    },
  ],
};

const benifits = {
  image: "others/1.jpg",
  lists: [
    {
      id: "1",
      benifit: "To bring harmony with the inner nature and outer nature",
    },
    {
      id: "2",
      benifit: "Connectivity with the inner being with outer existence",
    },
    {
      id: "3",
      benifit: "To get a clear perceptions",
    },
    {
      id: "4",
      benifit: "To free mind from influences of negative forces",
    },
  ],
};

export default class EshwariShakthiKendraSadhana extends Component {
  render() {
    return (
      <div>
        <Header />
        <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
        <section>
          <Container>
            <Heading
              smalltitle="Sadhana & Dhyana"
              title="Eshwari Shakthi Kendra Sadhana "
              specialTitle="(ESKS)"
            />
            <div className="text-justify">
              <p>
                Technically ESHWARI SHAKTHI KENDRA SADHANA is a SHAKTHA method
                of KUNDALINI activation and a form of the higher profound yogic
                spiritual practice, the SRIVIDYA Samayachara.
              </p>
              <p>
                Shaktha means the one who follows, practices and reveres the
                Feminine cosmic energy. There are three types of feminine cosmic
                energy activation which is very secret and sacred the activation
                is only possible through Guru-Shishya Parampara (lineage of
                master and disciple relationship ) in the scriptures it is said
                that
              </p>
              <p>
                <b>“TRIVIDHA KUNDALINI SHAKTHI STHREE DEVANAN CHA SRUSTAYE” </b>
                there are three types of Kundalini energy the first one is CHITH
                Kundalini , the second one is PRANA Kundalini and the third and
                ultimate is PARA Kundalini, the ESKS is 3 days workshop, is the
                process to activate the higher form of kundalini, known as Prana
                Kundalini, the Prana Kundalini will give lead to Urdhva
                Kundalini which means the movement of kundalini energy towards
                the higher energy centers, the right method and authentic yoga
                tantra methods are very secret and sacred techniques, ESKS is
                one among such simple yet powerful and effective technique.
              </p>
              <p>
                The body is made up of 36 elements out of 36 elements the 11
                elements belongs to Masculine consciousness and the rest 25
                elements belongs to the feminine consciousness, as per shaktha
                school of teaching the whole process of practice is based on the
                cleansing and transcending of the tattvas or principles
              </p>
              <p>
                The basic element of our existence is the five elements namely
                earth, fire, water, air and space but in reality each of the
                five elements represents a state of matter. Earth is not just
                soil, but it is everything in nature that is solid. Water is
                everything that is liquid. Air is everything that is gas.Fire is
                that part of Nature that transforms one state of matter into
                another. For example, fire transforms the solid state of water
                (ice) into liquid water and then into its gaseous state (steam).
                Withdrawing fire recreates the solid state. Fire is worshipped
                in many yogic and Tantric rituals because it is the means by
                which we can purify, empower, and control the other states of
                matter. Space is the mother of the other elements. The
                experience of space as luminous emptiness is the basis of higher
                spiritual experiences.
              </p>
            </div>
          </Container>
        </section>
        <section className="bg-light-gray-1">
          <Container>
            <div className="text-justify">
              <h2 className="title-small">Bhuta Shuddhi:</h2>
              <p>
                Each element is responsible for different structures in the
                body. Earth forms solid structures, such as bones, flesh, skin,
                tissues, and hair. Water forms saliva, urine, semen, blood, and
                sweat. Fire forms hunger, thirst, and sleep. Air is responsible
                for all movement, including expansion, contraction, and
                suppression. Space forms physical attraction and repulsion, as
                well as fear.
              </p>
              <p>
                If any element is impure or out of balance with another, disease
                and suffering may occur. ESKS helps us to purify these elements
                and restore balance and health and to unfold the inner powers
                and abilities contained in each element. In fact, ESKS is one of
                the most powerful ways to restore health and spiritual growth
              </p>
              <p>
                Bhuta Shuddhi keeps the system in harmony and balance. Prepares
                the system to handle powerful states of energy. Enhances the
                capabilities of the physical body, mind, and energy system.
                Creates the basis to gain complete mastery over the human system
                and allows the energy to move further towards the higher energy
                centers
              </p>
              <BenifitsCard benifitsList={benifitsOne} title="" />

              <h2 className="title-small">
                SURRENDERNESS TOWARDS THE DIRECTIONS{" "}
              </h2>
              <p>
                After wandering around an unfamiliar part of town, can you sense
                which direction to travel to get back to the subway or your car?
                If so, you can thank your entorhinal cortex, a brain area
                recently identified as being responsible for our sense of
                direction. Variation in the signals in this area might even
                explain why some people are better navigators than others.
              </p>
              <p>
                The new work adds to a growing understanding of how our brain
                knows where we are. Groundbreaking discoveries in this field won
                last year's Nobel Prize in Physiology or Medicine for John
                O'Keefe, a neuroscientist at University College London, who
                discovered “place cells” in the hippocampus, a brain region most
                associated with memory. These cells activate when we move into a
                specific location, so that groups of them form a map of the
                environment.
              </p>
              <p>
                O'Keefe shared the prize with his former students Edvard Moser
                and May-Britt Moser, both now at the Kavli Institute for Systems
                Neuroscience in Norway, who discovered “grid cells” in the
                entorhinal cortex, a region adjacent to the hippocampus. Grid
                cells have been called the brain's GPS system. They are thought
                to tell us where we are relative to where we started.
              </p>
              <p>
                O'Keefe shared the prize with his former students Edvard Moser
                and May-Britt Moser, both now at the Kavli Institute for Systems
                Neuroscience in Norway, who discovered “grid cells” in the
                entorhinal cortex, a region adjacent to the hippocampus. Grid
                cells have been called the brain's GPS system. They are thought
                to tell us where we are relative to where we started.
              </p>
              <p>
                A team of researchers, led by Hugo Spiers of University College
                London, asked 16 volunteers to familiarize themselves with a
                virtual environment consisting of a square courtyard with a
                landscape (such as a forest or a mountain) on each wall and a
                unique object in each corner. They then scanned the
                participants' brains while showing them views from the
                environment and asking them to indicate in which direction
                different objects lay. The entorhinal region displayed a
                distinct pattern of activity when volunteers faced each
                direction—consistent with how head-direction cells should
                behave. The researchers discovered, however, that the same
                pattern appeared whether the volunteers were facing a specific
                direction or just thinking about it.
              </p>
              <p>
                The finding suggests that the same mechanism that signals head
                direction also simulates goal direction. How, exactly, the brain
                switches back and forth is unclear, but the researchers think
                the brain probably signals which direction you are facing until
                you consciously decide to think about where you want to go, at
                which point the same cells then run the simulation.
              </p>
              <p>
                Interestingly, the more consistent the participants'
                goal-direction signals were, the better they were able to
                correctly recall in which direction the target objects lay,
                potentially offering a brain-based explanation for differences
                in navigational ability. Such results should be interpreted
                carefully, however. “There are many ways worse performance can
                lead to weaker effects,” cautions Neil Burgess, who heads a
                different group studying these systems at University College
                London. For instance, if a participant's attention lapses, she
                or he will not only perform worse but also produce less relevant
                brain activity.
              </p>
              <p>
                The work may have clinical relevance. The ability to navigate is
                often an early casualty of dementias such as Alzheimer's disease
                because the entorhinal region is one of the first areas to be
                affected. Spiers's group is working with doctors to develop
                tests to help identify deficits and potentially measure disease
                progression. The above research very clearly says that, the
                various Directions has the influence on our Mind / Brain, But in
                the yogic science a long year ago itself they had mentioned the
                varies good and Bad effects from the directions and the
                influence on the mind , the techniques to clear and get read
                from the Bad influences in the yogic practice it is very
                important to surrender to the cardinal , sub cardinal directions
                along with the ascendant & descendent directions totally 10
                directions it very clear there is force from each directions
                which has a strong influence on our mind, There are two ways to
                free your mind. The first is by cultivating the mind (that
                requires more skill and time). The second is by simply
                surrendering. But whom do you surrender to? Often you finds that
                you aren’t responsible for the emotions that you experience. The
                cosmic forces and the vibrations all around affect you. These
                cosmic forces are vibrations and can be called angels. The
                ancients believed that humans are puppets in the hands of these
                angels.
              </p>
              <p>
                There are 9 planets , 8 Deities and their lords along with 2
                more Deities totally 27 types of cosmic forces .
              </p>
              <p>
                For example the North rules anger and arrogance. The South is
                dominated by lust and obsession. The East mires you in
                attachment and entanglement. The West is controlled by greed and
                jealousy. With this thought in your mind that you aren’t
                responsible for the negative emotions and thoughts crowding your
                mind, facing the direction surrender them to the angel, the
                energy, the deities responsible for them
              </p>
              <p>The benefits are:</p>
              <BenifitsCard benifitsList={benifits} title="Benifits:" />
              <p>
                Surrendering to the angels of each direction help you to rid
                your mind of the clutter and one can gain clear perceptions and
                good speedy progress in the worldly and spiritual practice .
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div>
              <h2 className="title-small">The Death Process</h2>
              <p>
                If someone speaks about the death most of us are not ready to
                listen, not ready to accept the ultimate truth of the life and
                the funny part is we think and feel as if we don't die at all
                but the truth is some think different, it is bitter but true,
                there are many advantages if one knows and experiences the form
                of the death or glimpses of the death, the experience of death
                will transform the lives and it will unfold the many
                possibilities to lead a holistic life.
              </p>
              <p>
                A recent study published in the American Journal of Geriatric
                Psychiatry, which gathered data from terminal patients, family
                members and health care providers, aims to clarify what a good
                death looks like. The literature review identifies 11 core
                themes associated with dying well, culled from 36 studies:
              </p>
              <p>
                In laying out the factors that tend to be associated with a
                peaceful dying process, this research has the potential to help
                us better prepare for the deaths of our loved ones—and for our
                own.
              </p>
              <p>
                In India it is always believed that, the end of life should be
                the Mukthi /Moksha, we Indians don't bother or worry about the
                heaven or hell concept, we always prepare ourselves knowingly or
                unknowing towards death, but being a yogi or Sadhak one should
                keep himself well prepared or at least have the knowledge.
              </p>
              <p>
                Truth is, this life is uncertain and one must accept it, if one
                is not ready to accept means the person is either egoist or
                ignorant.
              </p>
              <p>
                Death experience is the part of ESKS workshop, here the
                participants experience the Body, Mind and the relationship
                between the inner being and they further experience the state of
                the mind when they drop the body and it is a experience of how
                being out of body feels like.
              </p>
              <p>
                Such experience makes the sadhaks to develop a meaningful
                holistic life, passion in dispassion , which brings changes in
                attitude and approach to worldly life and relationships, Helps
                to overcome fear of death and longing for life and a strong
                longing towards spiritual life, experience death, it is more
                than just a physical process .
              </p>
            </div>
          </Container>
        </section>
        <section className="bg-light-gray-1">
          <Container>
            <h2 className="title-small">Consort Cognition Meditation(CCM):</h2>
            <p>
              One of the wonderful and powerful form of meditation one must
              experience in his life time, the loveable and blissful experience
              of this meditation will transform the life instantly. In the
              process of Srividhya samayacjara, the sadhaks who practice the
              yoga tantra envision the deity as Feminine (Mother) the yogic
              science of Srividhya tradition, the union of the two is the
              embodiment of self and cosmos, the ground of the universe is the
              union of two which is the androgynous form of the underlying
              unitary principal in all existence.
            </p>
            <p>
              The samaya school of Srividhya regards masculine and feminine as
              one, the identity is the foundation of phenomenal manifestation in
              order to create, preserve and withdraw the masculine static energy
              and the feminine dynamic energy as one, they are not separate but
              not the same in nature. Our existence is the embodiment of static
              and dynamic energy, the emotional drive such as sufferings,
              stress, worries, grief and other negatives will bring strong
              distortion of harmony in the above energy patterns that will lead
              to a many complications in physical, psychological and energy
              levels in our system.
            </p>
            <p>
              The consort cognition meditation will bring the balance between
              both energies and it will make the sadhak to realize that:
            </p>
            <ul>
              <li>
                He/ She is a energy, embodiment of Love, which is the
                existential reality of the being
              </li>
              <li>
                Develops the sense of beyond the gender, cast, creed, name, form
                and the religion
              </li>
              <li> You are the epitome of masculine and feminine.</li>
              <li>
                They seem just like your other half, the parts of you that were
                missing all along,
              </li>
              <li>
                What you are to realize is that they are the parts of your worn
                yet unknown.
              </li>
              <li>
                You have such a deep and layered connection that makes you just
                be romantic.
              </li>
              <li>
                The purpose is not to make you feel settled or comfortable, but
                to help introduce you to yourself.
              </li>
            </ul>
            <p>
              The CCM will transform lives and bring harmony irrelevant of the
              gender, cast, creed, name, form and the religion and makes the
              sadhak to experience the dynamic form of static and the static
              form of dynamic energy and leads them to lead a holistic life and
              progress worldly and spiritually.
            </p>

            <p>
              The ESKS is a process to activate the PRANA Kundalini, which gives
              the lead to Urdhva Kundalini with all the above mentioned
              practices will make the sadhak to progress in worldly and
              spiritual life.
            </p>

            <p>
              In ESKS all the above mentioned processes are the opening for
              Srividya Eshwari Sadhana one of the profound shaktha monistic
              process based on experiential yoga tantra practice.
            </p>

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
          </Container>
        </section>
        <RegisterDarkCard
          registerCardBg="eshwari-shakthi-kendra-sadhana.png"
          title="Eshwari Shakthi Kendra Sadhana"
          desc="Technically ESHWARI SHAKTHI KENDRA SADHANA  is a SHAKTHA method of KUNDALINI activation and a form of the higher profound yogic spiritual practice, the SRIVIDYA Samayachara."
        />
        <Footer />
      </div>
    );
  }
}
