import React from "react";
import { Box, Heading, Button } from "grommet";
import { Notification, Home } from "grommet-icons";
import { Link } from "react-router-dom";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  return (
    <AppBar>
      <CustomLink to="/">
        <Heading level="3" margin="none">
          My App
        </Heading>
      </CustomLink>
      <Box direction="row" gap="small" align="center">
        <CustomLink to="/">
          <Button icon={<Home />} />
        </CustomLink>
        <Button
          icon={<Notification />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </Box>
    </AppBar>
  );
};

const AppBar = (props) => (
  <Box
    flex={false}
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ horizontal: "medium", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const CustomLink = (props) => (
  <Link style={{ textDecoration: "none", color: "#FFF" }} {...props} />
);

export default Navbar;
