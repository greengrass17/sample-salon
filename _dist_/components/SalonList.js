import React, {useContext, Fragment} from "../../web_modules/react.js";
import Box2 from "../../web_modules/@material-ui/core/Box.js";
import Typography2 from "../../web_modules/@material-ui/core/Typography.js";
import Divider2 from "../../web_modules/@material-ui/core/Divider.js";
import NextIcon2 from "./icons/NextIcon.js";
import {Link} from "../../web_modules/react-router-dom.js";
import {SalonContext} from "../contexts/SalonProvider.js";
import {List, ListItem} from "../../web_modules/@material-ui/core.js";
import SalonRating2 from "./SalonRating.js";
import {FilterContext} from "../contexts/FilterProvider.js";
function SalonList() {
  const salons = useContext(SalonContext);
  const {filter: {min, max}} = useContext(FilterContext);
  return /* @__PURE__ */ React.createElement(List, null, salons.filter(({price}) => min <= price && (max ? price <= max : true)).map(({
    id,
    time,
    name,
    price,
    rating,
    noOfReviews,
    distance,
    address
  }) => /* @__PURE__ */ React.createElement(Fragment, {
    key: id
  }, /* @__PURE__ */ React.createElement(ListItem, {
    component: Link,
    to: `/${id}`,
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Box2, {
    paddingY: 1
  }, /* @__PURE__ */ React.createElement(Typography2, null, time)), /* @__PURE__ */ React.createElement(Box2, {
    flexGrow: "1",
    paddingX: 2,
    paddingY: 1
  }, /* @__PURE__ */ React.createElement(Typography2, {
    variant: "h2"
  }, name), /* @__PURE__ */ React.createElement(SalonRating2, {
    label: noOfReviews,
    size: "small",
    readOnly: true,
    value: rating,
    color: "textSecondary"
  }), /* @__PURE__ */ React.createElement(Typography2, {
    variant: "body2",
    color: "textSecondary"
  }, address)), /* @__PURE__ */ React.createElement(Box2, {
    paddingY: 1,
    paddingX: 3
  }, /* @__PURE__ */ React.createElement(Typography2, null, price, " kr"), /* @__PURE__ */ React.createElement(Typography2, {
    variant: "subtitle1",
    component: "span",
    color: "textSecondary"
  }, distance)), /* @__PURE__ */ React.createElement(Box2, {
    alignSelf: "center"
  }, /* @__PURE__ */ React.createElement(NextIcon2, {
    color: "secondary",
    fontSize: "small"
  }))), /* @__PURE__ */ React.createElement(Divider2, null))));
}
export default SalonList;
