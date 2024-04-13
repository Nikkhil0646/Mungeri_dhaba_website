import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidSmall2.css";

const AndroidSmall2 = () => {
  const navigate = useNavigate();

  const onNavigationUndefinedGlyphClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="android-small-3">
      <div className="reviews-wrapper">
        <div className="reviews">reviews</div>
      </div>
      <div className="frame-parent65">
        <div className="home-wrapper">
          <div className="home">home</div>
        </div>
        <div className="frame-parent66">
          <div className="about-us-wrapper">
            <div className="about-us">about us</div>
          </div>
          <div className="gallery-contact">
            <div className="appetizers">appetizers</div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <div className="beverages-wrapper">
                  <div className="beverages">beverages</div>
                </div>
                <div className="gallerycontact">
                  <div className="gallery">gallery</div>
                </div>
                <div className="gallerycontact1">
                  <div className="contact-us">contact us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="navigation-undefined-glyph3"
        onClick={onNavigationUndefinedGlyphClick}
      >
        <img className="vector-icon2" alt="" src="/vector.svg" />
      </div>
      <main className="wrapper-6087bb7947c94b51760e46-parent">
        <div className="wrapper-6087bb7947c94b51760e46">
          <img
            className="bb7947c94b51760e467704378fe8-1-icon2"
            alt=""
            src="/6087bb7947c94b51760e467704378fe8-1@2x.png"
          />
        </div>
        <img className="frame-child92" alt="" src="/group-110@2x.png" />
        <img
          className="vector-icon3"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="home-undefined-glyph-unde"
          loading="lazy"
          alt=""
          src="/home--undefined--glyph-undefined.svg"
        />
        <img
          className="drink-margarita-icon"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <img className="call-icon" loading="lazy" alt="" src="/vector-3.svg" />
        <img
          className="drink-margarita-undefined"
          loading="lazy"
          alt=""
          src="/drink-margarita--undefined--glyph-undefined.svg"
        />
        <img
          className="vector-icon4"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="call-undefined-glyph-unde"
          loading="lazy"
          alt=""
          src="/call--undefined--glyph-undefined.svg"
        />
        <img
          className="arrow-left-undefined-glyph"
          loading="lazy"
          alt=""
          src="/arrow-left--undefined--glyph-undefined.svg"
        />
      </main>
    </div>
  );
};

export default AndroidSmall2;
