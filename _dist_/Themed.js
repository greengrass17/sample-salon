import React from "../web_modules/react.js";
import {createMuiTheme, ThemeProvider} from "../web_modules/@material-ui/core/styles.js";
import CssBaseline2 from "../web_modules/@material-ui/core/CssBaseline.js";
const millerBannerLight = {
  fontFamily: "MillerBanner Light",
  fontStyle: "normal",
  fontWeight: "lighter",
  src: `
    local('MillerBanner Light'),
    url("/static/MillerBanner-Light.otf") format("opentype")
  `
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#b69f58"
    },
    text: {
      primary: "#202020",
      secondary: "#666666"
    }
  },
  spacing: 7.5,
  typography: {
    fontFamily: '"Helvetica Neue", sans-serif',
    h1: {
      fontFamily: "MillerBanner Light",
      fontWeight: 300,
      fontSize: 22
    },
    h2: {
      fontFamily: "MillerBanner Light",
      fontWeight: 300,
      fontSize: 20
    },
    body1: {
      fontSize: 15,
      lineHeight: 1.75
    },
    body2: {
      fontWeight: 300,
      fontSize: 15
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: 13
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: 11
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [millerBannerLight]
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1rem"
      },
      fontSizeLarge: {
        fontSize: "1.2rem"
      },
      fontSizeSmall: {
        fontSize: "0.8rem"
      }
    },
    MuiDivider: {
      root: {
        margin: "0 15px",
        backgroundColor: "#eeeeee"
      }
    },
    MuiAppBar: {
      colorTransparent: {
        backgroundColor: "transparent !important"
      }
    },
    MuiListItem: {
      root: {
        backgroundColor: "#fff"
      }
    }
  }
});
export default function Themed({children}) {
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(CssBaseline2, null), children);
}
