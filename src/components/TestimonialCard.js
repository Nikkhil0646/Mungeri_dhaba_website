import FrameComponent2 from "./FrameComponent2";
import "./TestimonialCard.css";

const TestimonialCard = () => {
  return (
    <section className="testimonial-card">
      <div className="reviewer-info">
        <div className="reviewer-info-child" />
        <img
          className="ios-arrow-ltr-undefined-gl"
          alt=""
          src="/ios-arrow-ltr--undefined--glyph-undefined.svg"
        />
        <FrameComponent2 />
      </div>
      <div className="iterator">
        <div className="iterator-child" />
        <div className="rajat-singh1">rajat singh</div>
        <img className="iterator-item" alt="" src="/group-83.svg" />
      </div>
      <div className="reviewer-info1">
        <div className="reviewer-info-item" />
        <FrameComponent2 />
        <img
          className="ios-arrow-rtl-undefined-gl"
          alt=""
          src="/ios-arrow-rtl--undefined--glyph-undefined.svg"
        />
      </div>
    </section>
  );
};

export default TestimonialCard;
