import styles from "./styles.module.scss";
import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Poppins",
  components: {
    Button: {
      classNames: {
        root: styles.button,
      },
    },
    Text: {
      defaultProps: {
        fz: 14,
        c: "#fff",
      },
    },
  },
});

export default theme;
