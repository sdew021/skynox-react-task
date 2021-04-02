import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="content-body">
      <div className="wrap-content">{children}</div>
    </div>
  );
};

export default Layout;
