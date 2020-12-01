import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

import Button from "./components/button";

const overrides = {
  styles,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
