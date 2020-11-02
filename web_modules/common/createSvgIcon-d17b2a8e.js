import { b as _extends } from './hoist-non-react-statics.cjs-4ffb5180.js';
import { r as react } from './index-6ed86a98.js';
import { _ as __pika_web_default_export_for_treeshaking__ } from './SvgIcon-25b936be.js';

/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__, _extends({
      ref: ref
    }, props), path);
  };

  Component.muiName = __pika_web_default_export_for_treeshaking__.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}

export { createSvgIcon as c };
