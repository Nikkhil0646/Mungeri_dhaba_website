import { useCallback } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  const onNavigationUndefinedGlyphClick = useCallback(() => {
    // Please sync "NAV BAR" to the project
  }, []);

  return (
    <div className="frame-parent67">
      <div className="mungeri-dhaba-pdf-page-0001-1-parent">
        <img
          className="mungeri-dhaba-pdf-page-0001-1"
          loading="lazy"
          alt=""
          src="/mungeri-dhaba-pdf-page0001-1@2x.png"
        />
        <div className="branching-out">
          <h1 className="mungeri">MUNGERI</h1>
          <h1 className="dhaba">DHABA</h1>
        </div>
      </div>
      <div className="navigation-undefined-glyph-container">
        <div
          className="navigation-undefined-glyph4"
          onClick={onNavigationUndefinedGlyphClick}
        >
          <img
            className="vector-icon5"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
