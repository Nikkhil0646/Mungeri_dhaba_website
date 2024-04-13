import { useMemo } from "react";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  eggCurry,
  prop,
  propAlignSelf,
  propWidth,
  propWidth1,
  propGap,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
      gap: propGap,
    };
  }, [propWidth1, propGap]);

  return (
    <div className="frame-parent70" style={frameDivStyle}>
      <div className="frame-parent71">
        <div className="egg-curry-parent">
          <div className="egg-curry">{eggCurry}</div>
          <div className="ratings19">222 ratings</div>
        </div>
        <div className="frame-wrapper66">
          <div className="rectangle-parent93">
            <div className="frame-child111" />
            <img className="frame-child112" alt="" src="/group-82.svg" />
          </div>
        </div>
      </div>
      <div className="parent" style={frameDiv1Style}>
        <div className="div14">{prop}</div>
        <div className="pcs2">( 2 pcs )</div>
      </div>
    </div>
  );
};

export default FrameComponent9;
