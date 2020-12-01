import { mode } from "@chakra-ui/theme-tools";

const styles = {
  fonts: {
    heading: "Montserrat",
  },
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.50", "gray.800")(props),
      lineHeight: "base",
    },
  }),
};

export default styles;
