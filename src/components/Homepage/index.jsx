import React from "react";
import Content from "./content";

const Homepage = ({ size, showSidebar, setShowSidebar }) => {
  return (
    <Content
      size={size}
      showSidebar={showSidebar}
      setShowSidebar={setShowSidebar}
    />
  );
};

export default Homepage;
