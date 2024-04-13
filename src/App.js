import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LANDINGPAGE from "./pages/LANDINGPAGE";
import AndroidSmall1 from "./pages/AndroidSmall1";
import OurMenu from "./pages/OurMenu";
import AndroidSmall2 from "./pages/AndroidSmall2";
import AndroidSmall from "./pages/AndroidSmall";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-33":
        title = "";
        metaDescription = "";
        break;
      case "/our-menu":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-3":
        title = "";
        metaDescription = "";
        break;
      case "/android-small-6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LANDINGPAGE />} />
      <Route path="/android-small-33" element={<AndroidSmall1 />} />
      <Route path="/our-menu" element={<OurMenu />} />
      <Route path="/android-small-3" element={<AndroidSmall2 />} />
      <Route path="/android-small-6" element={<AndroidSmall />} />
    </Routes>
  );
}
export default App;
