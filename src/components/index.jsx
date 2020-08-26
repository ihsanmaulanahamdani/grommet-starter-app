import React, { useState } from "react";
import { Box, ResponsiveContext } from "grommet";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Subcomponents/Navbar";

import Homepage from "./Homepage";

const Components = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box fill>
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Switch>
            <Route exact path="/">
              <Homepage
                size={size}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            </Route>
          </Switch>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Components;
