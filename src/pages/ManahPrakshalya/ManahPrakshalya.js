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
    title: "Manah Prakshalya",
    subTitle: "Be the better version of yourself",
    desc: [],
    bannerImg: "eshwari-shakthi-kendra-sadhana-1.png",
  },
];

export default function ManahPrakshalya() {
  return (
    <div>
      <Header />
      <SmallBanner slides={slides} bannerClass="pt-0 small-banner-section" />
      <section>
        <Container>
          <Heading
            smalltitle="Sadhana & Dhyana"
            title="Manah Prakshalya - "
            specialTitle="Be the better version of yourself"
          />
          <div className="text-justify">
            <p>
              Ever since we were young we were told to excel in academics focus
              on getting good grades and ace our exams. In schools and colleges,
              the learning has always been more directed towards academic
              courses but what about aspects like self-improvement and personal
              development that play an equally important role in people’s lives?
            </p>
            <p>
              The importance of self-improvement often goes unnoticed. We are
              either conveniently brushing our shortcomings under the carpet,
              refusing to face them or are just happy being ignorant. Truth is –
              you cannot run away from yourself. The farther you run, the deeper
              a grave you dig because there will come a time when all those
              unresolved emotions will surface, leaving you overwhelmed.
            </p>
            <p>
              <b>
                So, what should you do? Start with consciously becoming more
                self-aware, observing your thoughts, emotions and responses and
                deciding to make self-evolution an integral part of your life.
              </b>
            </p>
            <p>
              Just the way learning should never stop, the same applies for
              self-evolution. The idea should be to focus on continuous
              self-development at every stage in our life and become better
              version of ourselves.
            </p>
            <p>
              The <b>Manah prakshalya</b> is the ancient time tested yogic
              science to bring changes in our Mindset to change in the form of
              new responses, thoughts, attitudes, behavior and feelings all of
              which is governed with a subject to bring betterment in our
              self-conscious development.
            </p>
            <p>
              Through <b>Manah Prakshalya</b> one can bring noticeable changes
              in the Physical, Psychological and Emotional plane and one can
              experience great success in Personal, Professional, Social and
              Spiritual life.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-light-gray-1">
        <Container>
          <h2 className="title mb-5">Manah Prakshalya is to...</h2>
          <h2 className="title-small mb-3">1. Increase Self-Awareness</h2>
          <p>
            We spend so much time getting to know other people and solve their
            issues. If only we spent that much time knowing ourselves, things
            would have been so much more different.{" "}
          </p>
          <p>
            The first step of self-evolution requires you to become more
            self-aware and get to know yourself better. It makes you question
            yourself and face reality for what it is, however harsh it might be.
          </p>
          <p>
            Self-awareness is an ongoing journey as life progresses, you are met
            with different experiences and challenges, which make you more aware
            of your personality, thoughts and feelings. So, in order to be on
            the path of self-evolution, it is important to never lose touch with
            yourself.
          </p>
          <h2 class="title-small mb-3 mt-5">2. To Enhance Strengths</h2>
          Self-evolution lets you identify your personal strengths and play on
          them. From relationships to careers – knowing your strengths is
          important for every sphere of your life. It gives you a better
          understanding of what you are seeking and where you are likely to
          thrive and excel. It helps you set life goals and make them to
          manifest. After all, you can only achieve what you want when you KNOW
          what you want. By nurturing and strengthening, you are more likely to
          attain success and move towards shaping a happier and more productive
          life.
          <h2 class="title-small mb-3 mt-5">3. To Overcome Weaknesses</h2>
          <b>Turn every weakness into strength</b>
          <p>
            While identifying strengths is an important aspect of
            self-evolution, so is coming to terms with your weaknesses. Don’t be
            ashamed of them; look at them as areas of improvement. We all have
            strengths and weaknesses that shape our personality, it is these
            imperfections that make us human.
          </p>
          The goal of improving yourself should be to look beyond those
          weaknesses that are stopping you from achieving greatness. Accept your
          weaknesses, identify where they stem from and be determined to
          overcome them.
          <p>
            It’s not easy but it’s certainly not impossible. Let your journey of
            self-evolution turn every weakness into strength and only take you
            upward.
          </p>
          <h2 class="title-small mb-3 mt-5">4. To Step out of Comfort Zone</h2>
          <p>
            The "comfort zone" ‘is a dangerous place to be in. It surely feels
            good, but it also denotes stagnancy and where there is stagnancy,
            you can never find growth.
          </p>
          <p>
            Choosing to work on improving yourself requires you to step out of
            your comfort zone. It lets you face your fears, try new things, take
            risks and challenge yourself. There will be times when you will
            discover a new side of your personality but there will also be times
            when you will fail.
          </p>
          <p>
            Don’t let those failures bog you down. The fact that you tried
            should motivate you to never get complacent and too comfortable in
            familiar spaces because as they say, life begins outside of your
            comfort zone.
          </p>
          <h2 class="title-small mb-3 mt-5">5. To Improve Mental Health</h2>
          <p>
            One of the biggest importances of self-evolution is the positive
            impact it has on mental health. When you work on yourself, you get
            to know yourself better which lets you deal with your thoughts and
            emotions more effectively. You begin to understand why you are
            experiencing certain emotions and learn how to tackle them with
            time.
          </p>
          <p>
            Someone who is not self-aware and not focused on improving
            themselves will have absolutely no control over their reactions
            which can lead to added stress and anxiety. Being in denial is never
            the answer.
          </p>
          <h2 class="title-small mb-3 mt-5">6. To Heal Relationships</h2>
          <p>
            When you work on improving yourself, you automatically improve your
            relations with those around you. For example, if you are
            short-tempered in nature it always remains a cause of concern in
            your relationships, by consciously working on that aspect of your
            personality, you learn how to tame your anger and become calmer.
            This positive change reflects in your personal and professional
            relationships and enhances them.
          </p>
          <p>
            The key to combat conflicts and build meaningful relationships
            starts with looking inward and developing yourself first. Moreover,
            when you strive to become a self-sufficient person and have a
            positive image, you are bound to nurture healthy relationships.
          </p>
          <h2 class="title-small mb-3 mt-5">7. A Motivating Factor</h2>
          <p>
            Imagine climbing up a mountain – every hurdle you cross, motivates
            you to go higher. The same analogy holds true when it comes to
            self-improvement. Every fear and weakness you overcome motivates you
            to continue on the path of self-improvement and evolve further.
          </p>
          <p>
            Self-improvement and motivation go hand in hand. When you see
            yourself developing as a human being, you are filled with optimism
            and the drive to push yourself to do better. It is a continuous
            cycle that needs you to maintain your motivation levels and be
            committed to continuous growth.
          </p>
          <h2 class="title-small mb-3 mt-5">8. To Make Better Decision </h2>
          <p>
            We are required to make decisions at every step in our lives and
            every decision has a repercussion. Moreover, it is not about making
            decisions as much as it is about being confident about the decision
            taken.
          </p>
          <p>
            Good decision making skill comes from a place of clarity,
            self-awareness and confidence which is a direct result of
            self-evolution. When you know what you want to achieve out of a
            situation and set your goals accordingly, you are able to make
            better, informed decisions.
          </p>
          <h2 class="title-small mb-3 mt-5">9. Sense of Purpose</h2>
          <p>
            Deciding to walk the path of self-evolution and personal development
            gives your life purpose and meaning. Why is that important, you ask?
            It’s because it helps you stay focused on your life goals, makes you
            feel alive and keeps you motivated. It improves mental and physical
            well-being by keeping you on the right track.
          </p>
          <h2 class="title-small mb-3 mt-5">10. More Confidence and Clear </h2>
          <p>
            With all the distractions one is bombarded with, confident mental
            clarity is a tough state to attain. However, when you make
            self-evolution the primary goal of your life, you begin to start
            becoming more authentic and removing the clutter from your life.
          </p>
          <p>
            Gaining clarity lets you stay focused and not engage in anything
            that takes you away from your goal. That said, there will be moments
            of confusion and indecisiveness but with experience, you will grow
            to become surer of yourself while gaining clarity and confident
            about your life.
          </p>
          <h2 class="title-small mb-3 mt-5">11. Instill a Learning Attitude</h2>
          <p>
            People who are invested in their continuous self-evolution come with
            an extremely positive attitude towards learning. It shows that they
            are aware of their shortcomings and are open to receiving feedback
            in order to improve.
          </p>
          <p>
            Instead of being ignorant and escaping from their problems, they
            make it a point to learn from their mistakes to grow and succeed.
          </p>
          <p>
            This is a wonderful quality to have as having a learning attitude is
            instrumental in achieving success.
          </p>
          <h2 class="title-small mb-3 mt-5">12. To Cultivate Self-love</h2>
          <p>
            Last but not the least, self-improvement cultivates self-love and
            compassion. By seeing yourself grow with every passing day, you
            build on your confidence and self-esteem.
          </p>
          <p>
            Many might debate that if you love yourself why must you want to
            change but that’s not true. Self-evolution is not changing yourself
            out of frustration. It is more about focusing on what matters to you
            and overcoming any mental hurdles that might be stopping you from
            reaching your highest potential.
          </p>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
