import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

import "./App.css";
// imports
import { Home, Sequences, Notes, Navbar, NewSequence } from "components";

import { returnPageTitle } from "../../utils/returnPageTitle";
import { Flex, Heading, Box } from "@chakra-ui/react";

const Header = ({ location }) => (
  <Heading as="h1" size="xl" m="15px 0 15px 0">
    {returnPageTitle(location.pathname)}
  </Heading>
);

const HeaderWithRoute = withRouter(Header);

function App({ location }) {
  return (
    <Box>
      <Flex direction="column" align="center" h="100vh" overflow="hidden">
        <HeaderWithRoute />
        <Navbar />
        <Flex direction="column" align="center">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sequences" exact component={Sequences} />
            <Route path="/notes" exact component={Notes} />
            <Route path="/new_sequence" exact component={NewSequence} />
          </Switch>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
