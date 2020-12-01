import React from "react";

import "./Navbar.css";

// Components
import { Logo, Menu } from "./components";
import { Flex } from "@chakra-ui/react";

export const Navbar = (props) => {
  return (
    <Flex
      className="navbar"
      m="0"
      p="0"
      w="100%"
      h="12vh"
      justify="center"
      direction="row"
      align="center"
      bg="#272a57"
      pos="absolute"
      bottom="0"
    >
      <Menu handleMenuChange={props.handleMenuChange} />
    </Flex>
  );
};

export default Navbar;
