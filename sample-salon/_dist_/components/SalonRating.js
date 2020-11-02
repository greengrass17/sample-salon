import React from "../../../web_modules/react.js";
import {withStyles} from "../../../web_modules/@material-ui/core.js";
import Box2 from "../../../web_modules/@material-ui/core/Box.js";
import Typography2 from "../../../web_modules/@material-ui/core/Typography.js";
import Rating2 from "../../../web_modules/@material-ui/lab/Rating.js";
const SalonStars = withStyles((theme) => ({
  root: {
    fontSize: "1rem",
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(1)
  },
  sizeSmall: {
    fontSize: "0.8rem"
  },
  iconEmpty: {
    stroke: theme.palette.secondary.main,
    color: "transparent"
  }
}))(Rating2);
export default function SalonRating({
  label,
  color,
  ...other
}) {
  return /* @__PURE__ */ React.createElement(Box2, {
    display: "flex",
    alignItems: "center",
    marginY: 0.5
  }, /* @__PURE__ */ React.createElement(SalonStars, {
    readOnly: true,
    ...other
  }), /* @__PURE__ */ React.createElement(Typography2, {
    variant: "subtitle1",
    component: "div",
    color
  }, "(", label, ")"));
}
