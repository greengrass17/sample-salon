import { _ as _objectWithoutProperties } from '../../common/defaultTheme-62dfd94c.js';
import { _ as _extends } from '../../common/hoist-non-react-statics.cjs-b9f6885b.js';
import { r as react } from '../../common/index-6ed86a98.js';
import { w as withStyles } from '../../common/withStyles-28088dbb.js';
import { c as clsx } from '../../common/clsx.m-114f790f.js';

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia = /*#__PURE__*/react.forwardRef(function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? _extends({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiCardMedia'
})(CardMedia);

export default __pika_web_default_export_for_treeshaking__;
