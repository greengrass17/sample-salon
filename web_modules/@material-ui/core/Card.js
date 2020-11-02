import { b as _extends } from '../../common/hoist-non-react-statics.cjs-4ffb5180.js';
import { d as _objectWithoutProperties } from '../../common/defaultTheme-f54ae8ee.js';
import { r as react } from '../../common/index-6ed86a98.js';
import { c as clsx } from '../../common/clsx.m-114f790f.js';
import { w as withStyles } from '../../common/withStyles-14b79df6.js';
import { P as Paper } from '../../common/Paper-e311630e.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card = /*#__PURE__*/react.forwardRef(function Card(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = _objectWithoutProperties(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/react.createElement(Paper, _extends({
    className: clsx(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiCard'
})(Card);

export default __pika_web_default_export_for_treeshaking__;
