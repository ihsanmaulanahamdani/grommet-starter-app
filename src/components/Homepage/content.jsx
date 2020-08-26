import React from "react";
import { Box } from "grommet";

import Sidebar from "../Subcomponents/Sidebar";

import Header from "./Header";

const Content = ({ size, showSidebar, setShowSidebar }) => {
  return (
    <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
      <Header />
      <Sidebar
        size={size}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </Box>
  );
};

export default Content;
