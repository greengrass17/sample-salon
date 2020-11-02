import React from "../../../web_modules/react.js";
import List2 from "../../../web_modules/@material-ui/core/List.js";
import ListItem2 from "../../../web_modules/@material-ui/core/ListItem.js";
import ListItemIcon2 from "../../../web_modules/@material-ui/core/ListItemIcon.js";
import ListItemText2 from "../../../web_modules/@material-ui/core/ListItemText.js";
import PinIcon2 from "./icons/PinIcon.js";
import ClockIcon2 from "./icons/ClockIcon.js";
import PhoneIcon2 from "./icons/PhoneIcon.js";
import GlobeIcon2 from "./icons/GlobeIcon.js";
import Divider2 from "../../../web_modules/@material-ui/core/Divider.js";
import {withStyles} from "../../../web_modules/@material-ui/core/styles.js";
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
      text: `${address}, ${postal}`
    },
    hour: {
      icon: /* @__PURE__ */ React.createElement(ClockIcon2, null),
      text: `\xD6ppet till ${openUntil} idag`
    },
    phone: {
      icon: /* @__PURE__ */ React.createElement(PhoneIcon2, null),
      text: phone
    },
    website: {
      icon: /* @__PURE__ */ React.createElement(GlobeIcon2, null),
      text: website
    },
    description: {
      icon: null,
      text: description
    }
  };
  return /* @__PURE__ */ React.createElement(StyledList, null, Object.entries(info).map(([key, {icon, text}], index, entries) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ListItem2, {
    key
  }, icon && /* @__PURE__ */ React.createElement(SalonListIcon, null, icon), /* @__PURE__ */ React.createElement(ListItemText2, {
    primary: text,
    primaryTypographyProps: {
      variant: "body2"
    }
  })), index < entries.length - 1 && /* @__PURE__ */ React.createElement(Divider2, null))));
}
