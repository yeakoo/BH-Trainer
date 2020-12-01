import React from "react";

import {
  faHome,
  faThList,
  faStickyNote,
  faSignInAlt,
  faCog,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import { Flex, useColorMode } from "@chakra-ui/react";

import MenuItem from "../MenuItem";

export const Menu = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justify="space-between" w="50%">
      <MenuItem name="Home" route="/" icon={faHome} />

      <MenuItem name="Sequences" route="/sequences" icon={faThList} />

      <MenuItem name="Notes" route="/notes" icon={faStickyNote} />

      <MenuItem
        name={colorMode === "light" ? "DarkMode" : "LightMode"}
        icon={colorMode === "light" ? faMoon : faSun}
        onClickProp={toggleColorMode}
      />

      <MenuItem name="Login" icon={faSignInAlt} />

      <MenuItem name="Settings" icon={faCog} />
    </Flex>
  );
};

export default Menu;
