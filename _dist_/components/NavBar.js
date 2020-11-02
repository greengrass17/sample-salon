import React from "../../web_modules/react.js";
import AppBar2 from "../../web_modules/@material-ui/core/AppBar.js";
import Typography2 from "../../web_modules/@material-ui/core/Typography.js";
import Box2 from "../../web_modules/@material-ui/core/Box.js";
import {styled, withStyles} from "../../web_modules/@material-ui/core/styles.js";
const Container = styled("div")({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "50px 1fr 50px"
});
const StyledAppBar = withStyles((theme) => ({
  colorPrimary: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  }
}))(AppBar2);
export default function NavBar({
  position,
  color,
  title,
  leftButton,
  rightButton
}) {
  return /* @__PURE__ */ React.createElement(StyledAppBar, {
    position,
    color,
    elevation: 0
  }, /* @__PURE__ */ React.createElement(Container, null, leftButton, /* @__PURE__ */ React.createElement(Box2, {
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }, /* @__PURE__ */ React.createElement(Typography2, {
    variant: "h1"
  }, title)), rightButton));
}
