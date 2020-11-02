import { u as useTheme, p as nested, T as ThemeContext } from '../../common/defaultTheme-62dfd94c.js';
export { q as createMuiTheme } from '../../common/defaultTheme-62dfd94c.js';
import { _ as _extends } from '../../common/hoist-non-react-statics.cjs-b9f6885b.js';
import { r as react } from '../../common/index-6ed86a98.js';
export { w as withStyles } from '../../common/withStyles-28088dbb.js';
import '../../common/clsx.m-114f790f.js';
export { s as styled } from '../../common/styled-490d5127.js';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    return mergedTheme;
  }

  return _extends(_extends({}, outerTheme), localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = useTheme();

  var theme = react.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
}

export { ThemeProvider };
