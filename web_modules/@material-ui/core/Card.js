import { _ as _objectWithoutProperties } from '../../common/defaultTheme-62dfd94c.js';
import { _ as _extends } from '../../common/hoist-non-react-statics.cjs-b9f6885b.js';
import { r as react } from '../../common/index-6ed86a98.js';
import { w as withStyles } from '../../common/withStyles-28088dbb.js';
import { c as clsx } from '../../common/clsx.m-114f790f.js';
import { P as Paper } from '../../common/Paper-dace61d5.js';

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
