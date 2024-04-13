import { useCallback } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "GALLERY" to the project
  }, []);

  return (
    <section className="fc13ff674292a265eb49ea824cfa95-parent">
      <img
        className="fc13ff674292a265eb49ea824cfa95-icon"
        alt=""
        src="/2fc13ff674292a265eb49ea824cfa95e-1@2x.png"
      />
      <div className="gallery-content">
        <div className="photo-content">
          <div className="photo-box">
            <div className="photo-title-box">
              <h2 className="photo-gallery">Photo Gallery</h2>
            </div>
            <div className="here-are-some-container">
              <p className="here-are-some">{`here are some of the extravagant `}</p>
              <p className="pictures-of-our">{`pictures of our restaurant which you `}</p>
              <p className="must-admire-by">must admire by your eyes.</p>
            </div>
          </div>
          <div className="circle-cluster">
            <div className="rectangle-parent92" onClick={onGroupContainerClick}>
              <div className="frame-child110" />
              <b className="explore-more">Explore More..</b>
            </div>
          </div>
        </div>
      </div>
      <img
        className="c838458f7545d8b9fa313f39da0f56-icon"
        alt=""
        src="/86c838458f7545d8b9fa313f39da0f56-1@2x.png"
      />
    </section>
  );
};

export default FrameComponent1;
