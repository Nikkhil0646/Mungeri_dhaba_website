import { useCallback } from "react";
import "./FrameComponent.css";

const FrameComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "ABOUT US" to the project
  }, []);

  return (
    <section className="bcd77feef1331310a33c161e0cc002-parent">
      <img
        className="bcd77feef1331310a33c161e0cc002-icon"
        alt=""
        src="/4bcd77feef1331310a33c161e0cc0027-1@2x.png"
      />
      <div className="our-team-parent">
        <h1 className="our-team">Our Team</h1>
        <div className="team-description">
          <div className="step-into-raadium-and-meet-container">
            <p className="blank-line">&nbsp;</p>
            <p className="step-into-raadium-and-meet-our">
              <span className="step-into-raadium-and-meet-our1">
                <span className="s">S</span>
                <span>
                  tep into Raadium and meet our tight-knit team dedicated to
                  crafting your perfect experience. From our expert Barista to
                  our creative minds shaping the ambiance, each member plays a
                  vital role. Friendly service, expertly brewed coffee, and
                  creative culinary delights - it's all about creating memorable
                  moments. Join us at Raadium, where every visit is a blend of
                  passion and perfection.
                </span>
              </span>
            </p>
          </div>
          <div
            className="button-background-parent"
            onClick={onGroupContainerClick}
          >
            <div className="button-background" />
            <b className="read-more">Read More</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
