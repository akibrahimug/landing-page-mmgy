import React from "react";
import "./door.styles.scss";

function Door() {
  return (
    <div className="door-container">
      <div className="door">
        <div className="outer-border">
          <div className="inner-border">
            <div className="innermost-border">
              <div className="background-color-container"></div>
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
  );
}

export default Door;
