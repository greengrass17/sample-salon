import { _ as _objectWithoutProperties } from '../../common/defaultTheme-62dfd94c.js';
import { _ as _extends } from '../../common/hoist-non-react-statics.cjs-b9f6885b.js';
import { r as react } from '../../common/index-6ed86a98.js';
import { w as withStyles } from '../../common/withStyles-28088dbb.js';
import { c as clsx } from '../../common/clsx.m-114f790f.js';

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = /*#__PURE__*/react.forwardRef(function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails);

export default __pika_web_default_export_for_treeshaking__;
