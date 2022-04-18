import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { comp } from '../constants';
import PlanetsContext from '../context/PlanetsContext';

export default function useFilterByNumericValue() {
  const { setFilteredPlanets, planets } = useContext(PlanetsContext);

  const [filters, setFilters] = useState([]);
  const [startFilter, setStartFilter] = useState(false);

  const filterByNumericValues = useCallback((query) => {
    const INVALID_POSITION = -1;
    const index = filters.findIndex(({ column }) => column === query.column);
    if (index !== INVALID_POSITION) {
      filters[index] = query;
      return;
    }
    setFilters((prev) => prev.concat(query));
  }, [filters]);

  const filter = useCallback(() => planets.filter((planet) => filters.every(
    ({ column, comparison, value }) => comp[comparison](planet[column], value),
  )), [filters, planets]);

  const removeFilter = useCallback((value) => {
    const fill = filters.filter((each) => each.column !== value);
    setFilters(fill);
  }, [filters]);

  useEffect(() => {
    if (startFilter) {
      setFilteredPlanets(filter());
      setStartFilter(false);
    }
  }, [filter, setFilteredPlanets, startFilter]);

  return useMemo(
    () => ({
      filterByNumericValues,
      setStartFilter,
      setFilters,
      filters,
      removeFilter,
    }),
    [filterByNumericValues, filters, removeFilter],
  );
}
