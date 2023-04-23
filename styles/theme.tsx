import { createTheme } from "@nextui-org/react";
import colors from "./colors.module.scss";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#ed4fa2",
      secondary: "#5bc5f2",
      success: "#37dd63",
      warning: "aa7dea",

      //   gradient:
      //     "linear-gradient(112deg, colors.blue100 -25%, colors.pink500 -10%, colors.purple500 80%)",
      //   link: "#5E1DAD",
    },
    space: {},
    fonts: { sans: "Readex Pro" },
  },
});

export default theme;
