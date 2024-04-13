import { useMemo } from "react";
import "./FrameComponent10.css";

const FrameComponent10 = ({
  curry,
  c7228d74b38305bd6c483b441,
  propHeight,
  propTop,
  propGap,
  propWidth,
  propMinWidth,
  propLeft,
  propWidth1,
  onGroupContainer6Click,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
      gap: propGap,
    };
  }, [propTop, propGap]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const c7228d74b38305bd6c483b4417d749IconStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth1,
    };
  }, [propLeft, propWidth1]);

  return (
    <div className="frame-wrapper70">
      <div
        className="frame-parent75"
        onClick={onGroupContainer6Click}
        style={groupDivStyle}
      >
        <div className="rectangle-parent95" style={frameDiv3Style}>
          <div className="frame-child115" />
          <div className="rectangle-parent96">
            <div className="frame-child116" />
            <img
              className="ce74031a32d4f2b208d3417168599b-icon48"
              alt=""
              src="/7ce74031a32d4f2b208d3417168599b8-2@2x.png"
            />
          </div>
          <div className="curry-wrapper" style={frameDiv4Style}>
            <div className="curry2">{curry}</div>
          </div>
        </div>
        <img
          className="c7228d74b38305bd6c483b4417d749-icon2"
          alt=""
          src={c7228d74b38305bd6c483b441}
          style={c7228d74b38305bd6c483b4417d749IconStyle}
        />
      </div>
    </div>
  );
};

export default FrameComponent10;
