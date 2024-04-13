import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({ propPadding }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="frame-wrapper67" style={frameDiv2Style}>
      <div className="frame-parent72">
        <div className="frame-wrapper68">
          <div className="non-veg-parent3">
            <div className="non-veg13">
              <div className="non-veg-child16" />
              <img className="non-veg-child17" alt="" src="/polygon-1.svg" />
            </div>
            <div className="frame-wrapper69">
              <div className="frame-parent73">
                <div className="frame-parent74">
                  <div className="rectangle-parent94">
                    <div className="frame-child113" />
                    <img
                      className="frame-child114"
                      alt=""
                      src="/group-82.svg"
                    />
                  </div>
                  <div className="div15">220/-</div>
                </div>
                <div className="data-aggregator">
                  <div className="ratings20">222 ratings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="a-delicious-dish20">
          A delicious dish with an exotic mixture of spices and vegies.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
