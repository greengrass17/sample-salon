import React, {useState, useContext} from "../../../web_modules/react.js";
import IconButton2 from "../../../web_modules/@material-ui/core/IconButton.js";
import Box2 from "../../../web_modules/@material-ui/core/Box.js";
import {withStyles} from "../../../web_modules/@material-ui/core/styles.js";
import BackIcon2 from "../components/icons/BackIcon.js";
import HeartIcon2 from "../components/icons/HeartIcon.js";
import {Link, useParams} from "../../../web_modules/react-router-dom.js";
import Typography2 from "../../../web_modules/@material-ui/core/Typography.js";
import SalonHeader2 from "../components/SalonHeader.js";
import Tab2 from "../../../web_modules/@material-ui/core/Tab.js";
import Tabs2 from "../../../web_modules/@material-ui/core/Tabs.js";
import TabPanel2 from "../components/TabPanel.js";
import {SalonContext} from "../contexts/SalonProvider.js";
import SalonInfo2 from "../components/SalonInfo.js";
import NavBar2 from "../components/NavBar.js";
const StyledTabs = withStyles({
  root: {
    borderBottom: "0.5px solid #eeeeee"
  }
})(Tabs2);
const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    background: theme.palette.common.white,
    fontWeight: "normal"
  }
}))(Tab2);
function SalonDetail() {
  const {id} = useParams();
  const salons = useContext(SalonContext);
  const salon = salons.find((salon2) => String(salon2.id) === id);
  const [tab, setTab] = useState(0);
  const changeTab = (event, newValue) => {
    setTab(newValue);
  };
  if (!salon)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavBar2, {
    position: "fixed",
    color: "transparent",
    title: "",
    leftButton: /* @__PURE__ */ React.createElement(Link, {
      to: "/"
    }, /* @__PURE__ */ React.createElement(IconButton2, null, /* @__PURE__ */ React.createElement(BackIcon2, {
      color: "primary",
      fontSize: "large"
    }))),
    rightButton: /* @__PURE__ */ React.createElement(IconButton2, null, /* @__PURE__ */ React.createElement(HeartIcon2, {
      color: "primary",
      fontSize: "large"
    }))
  }), /* @__PURE__ */ React.createElement(SalonHeader2, {
    ...salon
  }), /* @__PURE__ */ React.createElement(StyledTabs, {
    value: tab,
    onChange: changeTab,
    variant: "fullWidth"
  }, /* @__PURE__ */ React.createElement(StyledTab, {
    label: "Info"
  }), /* @__PURE__ */ React.createElement(StyledTab, {
    label: "Schema"
  })), /* @__PURE__ */ React.createElement(TabPanel2, {
    value: tab,
    index: 0
  }, /* @__PURE__ */ React.createElement(SalonInfo2, {
    ...salon
  })), /* @__PURE__ */ React.createElement(TabPanel2, {
    value: tab,
    index: 1
  }, /* @__PURE__ */ React.createElement(Box2, {
    p: 2
  }, /* @__PURE__ */ React.createElement(Typography2, {
    variant: "body2"
  }, "Schema"))));
}
export default SalonDetail;
