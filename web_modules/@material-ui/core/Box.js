import { b as _extends } from '../../common/hoist-non-react-statics.cjs-4ffb5180.js';
import { l as handleBreakpoints, n as _defineProperty, o as merge, i as _toConsumableArray, s as spacing } from '../../common/defaultTheme-f54ae8ee.js';
import '../../common/index-6ed86a98.js';
import '../../common/clsx.m-114f790f.js';
import { s as styled } from '../../common/styled-42ba7581.js';

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return _defineProperty({}, cssProperty, value);
    };

    return handleBreakpoints(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  {};
  fn.filterProps = [prop];
  return fn;
}

function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return merge(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = style({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = style({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);

function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return _extends(_extends({}, merge(output, styleFunction(_extends({
        theme: props.theme
      }, props.css)))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  {};
  newStyleFunction.filterProps = ['css'].concat(_toConsumableArray(styleFunction.filterProps));
  return newStyleFunction;
}

var displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = style({
  prop: 'display'
});
var overflow = style({
  prop: 'overflow'
});
var textOverflow = style({
  prop: 'textOverflow'
});
var visibility = style({
  prop: 'visibility'
});
var whiteSpace = style({
  prop: 'whiteSpace'
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

var flexBasis = style({
  prop: 'flexBasis'
});
var flexDirection = style({
  prop: 'flexDirection'
});
var flexWrap = style({
  prop: 'flexWrap'
});
var justifyContent = style({
  prop: 'justifyContent'
});
var alignItems = style({
  prop: 'alignItems'
});
var alignContent = style({
  prop: 'alignContent'
});
var order = style({
  prop: 'order'
});
var flex = style({
  prop: 'flex'
});
var flexGrow = style({
  prop: 'flexGrow'
});
var flexShrink = style({
  prop: 'flexShrink'
});
var alignSelf = style({
  prop: 'alignSelf'
});
var justifyItems = style({
  prop: 'justifyItems'
});
var justifySelf = style({
  prop: 'justifySelf'
});
var flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

var gridGap = style({
  prop: 'gridGap'
});
var gridColumnGap = style({
  prop: 'gridColumnGap'
});
var gridRowGap = style({
  prop: 'gridRowGap'
});
var gridColumn = style({
  prop: 'gridColumn'
});
var gridRow = style({
  prop: 'gridRow'
});
var gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
var gridAutoRows = style({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
var gridArea = style({
  prop: 'gridArea'
});
var grid = compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

var color = style({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = compose(color, bgcolor);

var position = style({
  prop: 'position'
});
var zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var top = style({
  prop: 'top'
});
var right = style({
  prop: 'right'
});
var bottom = style({
  prop: 'bottom'
});
var left = style({
  prop: 'left'
});
var positions = compose(position, zIndex, top, right, bottom, left);

var boxShadow = style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});

function transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = style({
  prop: 'width',
  transform: transform
});
var maxWidth = style({
  prop: 'maxWidth',
  transform: transform
});
var minWidth = style({
  prop: 'minWidth',
  transform: transform
});
var height = style({
  prop: 'height',
  transform: transform
});
var maxHeight = style({
  prop: 'maxHeight',
  transform: transform
});
var minHeight = style({
  prop: 'minHeight',
  transform: transform
});
var sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform: transform
});
var sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform: transform
});
var boxSizing = style({
  prop: 'boxSizing'
});
var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

var fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = style({
  prop: 'letterSpacing'
});
var lineHeight = style({
  prop: 'lineHeight'
});
var textAlign = style({
  prop: 'textAlign'
});
var typography = compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

var styleFunction = css(compose(borders, display, flexbox, grid, positions, palette, boxShadow, sizing, spacing, typography));
/**
 * @ignore - do not document.
 */

var Box = styled('div')(styleFunction, {
  name: 'MuiBox'
});

export default Box;
