import { useCallback } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import TestimonialCard from "../components/TestimonialCard";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./LANDINGPAGE.css";

const LANDINGPAGE = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/our-menu");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    // Please sync "Android Small - 46" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Android Small - 35" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "FEEDBACK" to the project
  }, []);

  return (
    <div className="landing-page">
      <img
        className="bb7947c94b51760e467704378fe8-1-icon"
        alt=""
        src="/6087bb7947c94b51760e467704378fe8-1@2x.png"
      />
      <section className="component-2-parent">
        <div className="component-2">
          <img
            className="bb7947c94b51760e467704378fe8-1-icon1"
            alt=""
            src="/6087bb7947c94b51760e467704378fe8-1@2x.png"
          />
          <img
            className="f8af29b11c81974eb40fa072edfbd5-icon"
            alt=""
            src="/8f8af29b11c81974eb40fa072edfbd54-1@2x.png"
          />
          <img
            className="d0634ba2f16728cb4a1842876043a2-icon"
            alt=""
            src="/d0634ba2f16728cb4a1842876043a25c-2@2x.png"
          />
          <img
            className="b51f4bdb0ecab65cee1b59aab252da-icon"
            alt=""
            src="/b51f4bdb0ecab65cee1b59aab252daf4-1@2x.png"
          />
          <img
            className="ea17ac5c8d087dda936624199d6-1-icon"
            alt=""
            src="/80951ea17ac5c8d087dda936624199d6-1@2x.png"
          />
        </div>
        <FrameComponent7 />
        <div className="leafy">
          <div className="frame-parent">
            <div className="frame-group">
              <button className="rectangle-parent" onClick={onGroupButtonClick}>
                <div className="frame-child" />
                <b className="our-menu">Our Menu</b>
              </button>
              <button className="rectangle-group" onClick={onGroupButton1Click}>
                <div className="frame-item" />
                <b className="book-a-table">Book a Table</b>
              </button>
            </div>
            <div className="experience-a-vibrant-container">
              <p className="experience-a-vibrant">
                Experience a vibrant and extraordinary hotspot in the city of
                Bhubaneswar !
              </p>
              <p className="perfect-fit-to">
                Perfect fit to your hang to the mungeri dhaba.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2 className="our-items">
        <span>
          <span className="ou">Ou</span>
          <span className="r">r</span>
        </span>
        <span className="span">{` `}</span>
        <span className="items">items</span>
      </h2>
      <div className="rectangle-container" onClick={onGroupContainerClick}>
        <div className="frame-inner" />
        <img
          className="ce74031a32d4f2b208d3417168599b-icon"
          alt=""
          src="/7ce74031a32d4f2b208d3417168599b8-1@2x.png"
        />
      </div>
      <FrameComponent6 />
      <GroupComponent1 />
      <GroupComponent />
      <section className="why-peoples-choose">Why Peoples Choose Us ?</section>
      <div className="hospitality">Hospitality</div>
      <img
        className="people-undefined-glyph-un"
        alt=""
        src="/people--undefined--glyph-undefined.svg"
      />
      <img
        className="camera-sparkles-undefined"
        alt=""
        src="/camera-sparkles--undefined--glyph-undefined.svg"
      />
      <div className="relax-in-style">
        RELAX IN STYLE AT OUR CAFÉ. CHOOSE A COZY SPOT, SIP YOUR FAVORITE DRINK,
        AND SAVOR THE WELCOMING AMBIANCE WE OFFEr
      </div>
      <div className="delights">Delights</div>
      <img
        className="food-cake-undefined-glyph"
        alt=""
        src="/food-cake--undefined--glyph-undefined.svg"
      />
      <section className="frame-container">
        <div className="ambience-wrapper">
          <div className="ambience">Ambience</div>
        </div>
        <div className="dedicated-team-elevating-your-wrapper">
          <div className="dedicated-team-elevating-container">
            <p className="dedicated-team-elevating">
              DEDICATED TEAM, ELEVATING YOUR CAFE EXPERIENCE WITH EXCEPTIONAL
              SERVICE, WARMTH, AND A PASSION FOR HOSPITALITY
            </p>
          </div>
        </div>
        <div className="hospitality-description">
          <div className="sensational-flavors-and">
            SENSATIONAL FLAVORS AND CULINARY MASTERY UNITE IN ICONIC DELIGHTS,
            CREATING AN UNFORGETTABLE DINING for all
          </div>
        </div>
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <div className="wrapper-rectangle-73">
        <img
          className="wrapper-rectangle-73-child"
          alt=""
          src="/rectangle-73.svg"
        />
      </div>
      <div className="c49c4c4f12111e074991d7bc8979e1" />
      <FrameComponent3 />
      <h2 className="what-our-visitors">What Our Visitors Says</h2>
      <div className="review-card">
        <div
          className="review-background-parent"
          onClick={onGroupContainer2Click}
        >
          <div className="review-background" />
          <b className="write-a-review">Write a Review</b>
        </div>
        <div className="module">
          <div className="chart-creator" />
        </div>
      </div>
      <TestimonialCard />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default LANDINGPAGE;
