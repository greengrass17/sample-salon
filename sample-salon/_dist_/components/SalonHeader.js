import React from "../../../web_modules/react.js";
import Card2 from "../../../web_modules/@material-ui/core/Card.js";
import CardMedia2 from "../../../web_modules/@material-ui/core/CardMedia.js";
import CardContent2 from "../../../web_modules/@material-ui/core/CardContent.js";
import Typography2 from "../../../web_modules/@material-ui/core/Typography.js";
import SalonRating2 from "./SalonRating.js";
import {withStyles} from "../../../web_modules/@material-ui/core/styles.js";
const Root = withStyles({
  root: {
    position: "relative"
  }
})(Card2);
const SalonHeaderContent = withStyles({
  root: {
    paddingTop: 50,
    paddingBottom: "15px !important",
    background: "linear-gradient(0deg, black, transparent)",
    position: "absolute",
    width: "100%",
    bottom: 0
  }
})(CardContent2);
export default function SalonHeader({
  name,
  image,
  noOfReviews,
  rating
}) {
  return /* @__PURE__ */ React.createElement(Root, {
    elevation: 0,
    square: true
  }, /* @__PURE__ */ React.createElement(CardMedia2, {
    component: "img",
    src: image
  }), /* @__PURE__ */ React.createElement(SalonHeaderContent, null, /* @__PURE__ */ React.createElement(Typography2, {
    variant: "h1",
    color: "primary"
  }, name), /* @__PURE__ */ React.createElement(SalonRating2, {
    label: noOfReviews,
    readOnly: true,
    value: rating,
    color: "primary"
  })));
}
