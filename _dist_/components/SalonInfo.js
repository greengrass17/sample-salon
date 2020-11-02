import React from "../../web_modules/react.js";
import List2 from "../../web_modules/@material-ui/core/List.js";
import ListItem2 from "../../web_modules/@material-ui/core/ListItem.js";
import ListItemIcon2 from "../../web_modules/@material-ui/core/ListItemIcon.js";
import ListItemText2 from "../../web_modules/@material-ui/core/ListItemText.js";
import PinIcon2 from "./icons/PinIcon.js";
import ClockIcon2 from "./icons/ClockIcon.js";
import PhoneIcon2 from "./icons/PhoneIcon.js";
import GlobeIcon2 from "./icons/GlobeIcon.js";
import Divider2 from "../../web_modules/@material-ui/core/Divider.js";
import {withStyles} from "../../web_modules/@material-ui/core/styles.js";
import DownIcon2 from "./icons/DownIcon.js";
import Typography2 from "../../web_modules/@material-ui/core/Typography.js";
const StyledList = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  }
}))(List2);
const SalonListIcon = withStyles((theme) => ({
  root: {
    minWidth: "auto",
    paddingRight: theme.spacing(2)
  }
}))(ListItemIcon2);
const StyledDownIcon = withStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2)
  }
}))(DownIcon2);
export default function SalonInfo({
  address,
  postal,
  openUntil,
  phone,
  website,
  description
}) {
  const info = {
    address: {
      icon: /* @__PURE__ */ React.createElement(PinIcon2, null),
      text: `${address}, ${postal}`,
      expandable: false
    },
    hour: {
      icon: /* @__PURE__ */ React.createElement(ClockIcon2, null),
      text: `\xD6ppet till ${openUntil} idag`,
      expandable: true
    },
    phone: {
      icon: /* @__PURE__ */ React.createElement(PhoneIcon2, null),
      text: phone,
      expandable: false
    },
    website: {
      icon: /* @__PURE__ */ React.createElement(GlobeIcon2, null),
      text: website,
      expandable: false
    },
    description: {
      icon: null,
      text: description,
      expandable: false
    }
  };
  return /* @__PURE__ */ React.createElement(StyledList, null, Object.entries(info).map(([key, {icon, text, expandable}], index, entries) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ListItem2, {
    key
  }, icon && /* @__PURE__ */ React.createElement(SalonListIcon, null, icon), /* @__PURE__ */ React.createElement(ListItemText2, {
    disableTypography: true
  }, /* @__PURE__ */ React.createElement(Typography2, {
    variant: "body2",
    display: "inline"
  }, text), expandable && /* @__PURE__ */ React.createElement(StyledDownIcon, {
    color: "secondary",
    fontSize: "small"
  }))), index < entries.length - 1 && /* @__PURE__ */ React.createElement(Divider2, null))));
}
