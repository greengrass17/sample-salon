import React from "../../web_modules/react.js";
import Box2 from "../../web_modules/@material-ui/core/Box.js";
function TabPanel({children, value, index, ...other}) {
  return /* @__PURE__ */ React.createElement("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`,
    ...other
  }, value === index && /* @__PURE__ */ React.createElement(Box2, null, children));
}
export default TabPanel;
