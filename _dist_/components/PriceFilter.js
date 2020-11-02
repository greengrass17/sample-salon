import React, {useState, useContext} from "../../web_modules/react.js";
import DownIcon2 from "./icons/DownIcon.js";
import Accordion2 from "../../web_modules/@material-ui/core/Accordion.js";
import AccordionDetails2 from "../../web_modules/@material-ui/core/AccordionDetails.js";
import AccordionSummary2 from "../../web_modules/@material-ui/core/AccordionSummary.js";
import List2 from "../../web_modules/@material-ui/core/List.js";
import ListItem2 from "../../web_modules/@material-ui/core/ListItem.js";
import ListItemText2 from "../../web_modules/@material-ui/core/ListItemText.js";
import Typography2 from "../../web_modules/@material-ui/core/Typography.js";
import {withStyles} from "../../web_modules/@material-ui/core/styles.js";
import {FilterContext} from "../contexts/FilterProvider.js";
const FilterMenu = withStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  }
}))(Accordion2);
const StyledAccordionDetails = withStyles({
  root: {
    display: "block"
  }
})(AccordionDetails2);
export default function PriceFilter({}) {
  const {filters, filter, setFilter} = useContext(FilterContext);
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const filterHandlerGenerator = (index) => () => {
    setFilter(filters[index]);
    setShowFilter(false);
  };
  return /* @__PURE__ */ React.createElement(FilterMenu, {
    expanded: showFilter,
    elevation: 0
  }, /* @__PURE__ */ React.createElement(AccordionSummary2, {
    expandIcon: /* @__PURE__ */ React.createElement(DownIcon2, {
      color: "secondary",
      fontSize: "small"
    }),
    onClick: toggleFilter
  }, /* @__PURE__ */ React.createElement(Typography2, {
    color: "textPrimary"
  }, "Pris ", filter.label || `${filter.min} - ${filter.max} kr`)), /* @__PURE__ */ React.createElement(StyledAccordionDetails, null, /* @__PURE__ */ React.createElement(List2, null, filters.map((filter2, index) => /* @__PURE__ */ React.createElement(ListItem2, {
    key: index,
    button: true,
    onClick: filterHandlerGenerator(index)
  }, /* @__PURE__ */ React.createElement(ListItemText2, null, filter2.label || `${filter2.min} - ${filter2.max} kr`))))));
}
