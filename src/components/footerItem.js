import React from "react";

const FooterItem = ({ icon, title, description }) => {
  return (
    <div className="footer-item">
      <div style={{ display: "flex" }}>
        <span style={{ padding: "0px 6px" }}>{icon}</span>
        <h4 className="ftr-title">{title}</h4>
      </div>
      <p className="ftr-desc" style={{ maxWidth: "75%", paddingLeft: "30px" }}>
        {description}
      </p>
    </div>
  );
};

export default FooterItem;
