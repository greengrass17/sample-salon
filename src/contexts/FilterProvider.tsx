import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

const FILTERS = [
  {
    min: 0,
    label: 'Alla priser',
  },
  {
    min: 0,
    max: 249,
  },
  {
    min: 250,
    max: 499,
  },
  {
    min: 500,
    max: 999,
  },
];

type Filter =
  | { min: number; label: string; max?: undefined }
  | { min: number; max: number; label?: undefined };

type FilterContextType = {
  filters: Filter[];
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
};

export const FilterContext = createContext<FilterContextType>({
  filters: FILTERS,
  filter: FILTERS[0],
  setFilter: () => {},
});

export default function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <FilterContext.Provider value={{ filters: FILTERS, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
