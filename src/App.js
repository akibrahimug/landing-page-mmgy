import "./App.scss";
import Navigation from "./components/navigation/navigation.components";
import ctaImage from "./assets/call-to-action-bg.png";
import { useState, useEffect } from "react";
import Button from "./components/call-to-action/cta-button.components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function App() {
  const [isActive, setIsActive] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    // if the doors start opening
    isActive
      ? // set a timer to start fading in the picture
        setTimeout(() => {
          setShowImage(true);
        }, 400)
      : // if they are closed hide the picture
        setShowImage(false);
  }, [isActive]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <div>
        <h2 className="page-title">THIS IS A CAMPAIGN FOR A DESTINATION</h2>
      </div>
      <div className="app-container">
        {/* Left Door */}
        <div
          className={`door-container left slide-left ${
            isActive ? "active" : "deactive"
          }`}
          onClick={handleClick}
        >
          <div className="door">
            <div className="outer-border">
              <div className="inner-border">
                <div className="innermost-border">
                  <div
                    className={`background-color-container ${
                      isActive ? "active" : ""
                    }`}
                  ></div>
                  <div className="inner-door-vertical-segment"></div>
                  <div className="inner-door-horizontal-segment">
                    <hr className=" top" />
                    <hr className=" middle" />
                    <hr className=" bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image call to action */}
        <div className={`beach-image-container ${showImage ? "fade-in" : ""}`}>
          <Button />
          <img src={ctaImage} alt="" />
        </div>
        {/* Right Door */}
        <div
          className={`door-container right slide-right ${
            isActive ? "active" : "deactive"
          }`}
          onClick={handleClick}
        >
          <div className="door">
            <div className="outer-border">
              <div className="inner-border">
                <div className="innermost-border">
                  <div
                    className={`background-color-container ${
                      isActive ? "active" : ""
                    }`}
                  ></div>
                  <div className="inner-door-vertical-segment"></div>
                  <div className="inner-door-horizontal-segment">
                    <hr className=" top" />
                    <hr className=" middle" />
                    <hr className=" bottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`bottom-info-container ${isActive ? "hide-bottom" : ""}`}>
        <div>
          <ArrowBackIosNewIcon
            style={{
              color: "#ff7bac",
              fontWeight: "700",
              fontSize: "30px",
              marginTop: "10px",
            }}
          />
          <ArrowForwardIosIcon
            style={{
              color: "#ff7bac",
              fontWeight: "700",
              fontSize: "30px",
              marginTop: "10px",
            }}
          />
        </div>
        <div>
          <h3 className="bottom-title">SLIDE THE WINDOW</h3>
          <p>TO EXPLORE</p>
        </div>
      </div>
    </>
  );
}

export default App;
