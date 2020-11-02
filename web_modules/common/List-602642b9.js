import { _ as _objectWithoutProperties } from './defaultTheme-62dfd94c.js';
import { _ as _extends } from './hoist-non-react-statics.cjs-b9f6885b.js';
import { r as react } from './index-6ed86a98.js';
import { w as withStyles } from './withStyles-28088dbb.js';
import { c as clsx } from './clsx.m-114f790f.js';
import { L as ListContext } from './ListContext-65bb8be6.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = /*#__PURE__*/react.forwardRef(function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react.useMemo(function () {
    return {
      dense: dense
    };
  }, [dense]);
  return /*#__PURE__*/react.createElement(ListContext.Provider, {
    value: context
  }, /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiList'
})(List);

export { __pika_web_default_export_for_treeshaking__ as _ };
