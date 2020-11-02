import { b as _extends } from '../../common/hoist-non-react-statics.cjs-4ffb5180.js';
import { d as _objectWithoutProperties } from '../../common/defaultTheme-f54ae8ee.js';
import { r as react } from '../../common/index-6ed86a98.js';
import { c as clsx } from '../../common/clsx.m-114f790f.js';
import { w as withStyles } from '../../common/withStyles-14b79df6.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent = /*#__PURE__*/react.forwardRef(function CardContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = _objectWithoutProperties(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiCardContent'
})(CardContent);

export default __pika_web_default_export_for_treeshaking__;
