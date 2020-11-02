import React from "../../web_modules/react.js";
import IconButton2 from "../../web_modules/@material-ui/core/IconButton.js";
import SalonList2 from "../components/SalonList.js";
import BackIcon2 from "../components/icons/BackIcon.js";
import FilterIcon2 from "../components/icons/FilterIcon.js";
import NavBar2 from "../components/NavBar.js";
import PriceFilter2 from "../components/PriceFilter.js";
function SalonListing() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavBar2, {
    position: "sticky",
    title: "H\xE5r",
    leftButton: /* @__PURE__ */ React.createElement(IconButton2, null, /* @__PURE__ */ React.createElement(BackIcon2, {
      color: "secondary",
      fontSize: "large"
    })),
    rightButton: /* @__PURE__ */ React.createElement(IconButton2, null, /* @__PURE__ */ React.createElement(FilterIcon2, {
      color: "secondary",
      fontSize: "large"
    }))
  }), /* @__PURE__ */ React.createElement(PriceFilter2, null), /* @__PURE__ */ React.createElement(SalonList2, null));
}
export default SalonListing;
