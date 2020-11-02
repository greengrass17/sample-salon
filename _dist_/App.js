import React from "../web_modules/react.js";
import SalonListing2 from "./views/SalonListing.js";
import SalonDetail2 from "./views/SalonDetail.js";
import SalonProvider2 from "./contexts/SalonProvider.js";
import FilterProvider2 from "./contexts/FilterProvider.js";
import Themed2 from "./Themed.js";
import {BrowserRouter as Router, Switch, Route} from "../web_modules/react-router-dom.js";
function App() {
  return /* @__PURE__ */ React.createElement(SalonProvider2, null, /* @__PURE__ */ React.createElement(FilterProvider2, null, /* @__PURE__ */ React.createElement(Themed2, null, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/:id"
  }, /* @__PURE__ */ React.createElement(SalonDetail2, null)), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ React.createElement(SalonListing2, null)))))));
}
export default App;
