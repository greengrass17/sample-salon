import React, {
  createContext,
  useState
} from "../../web_modules/react.js";
const FILTERS = [
  {
    min: 0,
    label: "Alla priser"
  },
  {
    min: 0,
    max: 250
  },
  {
    min: 250,
    max: 500
  },
  {
    min: 500,
    max: 1e3
  }
];
export const FilterContext = createContext({
  filters: FILTERS,
  filter: FILTERS[0],
  setFilter: () => {
  }
});
export default function FilterProvider({children}) {
  const [filter, setFilter] = useState(FILTERS[0]);
  return /* @__PURE__ */ React.createElement(FilterContext.Provider, {
    value: {filters: FILTERS, filter, setFilter}
  }, children);
}
