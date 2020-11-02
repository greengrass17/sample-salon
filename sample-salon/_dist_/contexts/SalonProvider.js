import React, {createContext} from "../../../web_modules/react.js";
import DATA from "../data.json.proxy.js";
export const SalonContext = createContext(DATA);
export default function SalonProvider({children}) {
  return /* @__PURE__ */ React.createElement(SalonContext.Provider, {
    value: DATA
  }, children);
}
