import React from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router } from "react-router-dom";

import Components from "./components";

function App() {
  return (
    <Grommet theme={theme} themeMode="dark" full>
      <Router>
        <Components />
      </Router>
    </Grommet>
  );
}

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export default App;
