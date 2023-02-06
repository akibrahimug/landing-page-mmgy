import React from "react";
import NavigationLogos from "../../assets/navigation-logos.png";
import "./navigation.styles.scss";
function Navigation() {
  return (
    <div className="nav-container">
      <img src={NavigationLogos} alt="" className="nav-logos" />
    </div>
  );
}

export default Navigation;
