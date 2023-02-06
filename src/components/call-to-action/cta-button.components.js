import React, { useState } from "react";
import "./cta-button.styles.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VideoPlayer from "../videoPlayer/Video.components";
function Button() {
  const [handleButtonClick, setHandleButtonClick] = useState();
  const handleClick = () => {
    setHandleButtonClick(!handleButtonClick);
  };

  return (
    <>
      <div className="cta-button-container">
        <button
          onClick={handleClick}
          className={`${handleButtonClick ? "hide-button" : ""}`}
        >
          WATCH VIDEO
          <ArrowForwardIosIcon className="button-arrow-icon" />
        </button>
      </div>
      {handleButtonClick && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
            onClick={() => setHandleButtonClick(false)}
          >
            <VideoPlayer />
          </div>
        </div>
      )}
    </>
  );
}

export default Button;
