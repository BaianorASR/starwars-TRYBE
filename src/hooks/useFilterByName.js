import { useCallback, useContext, useMemo } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function useFilterByName() {
  const { setFilteredPlanets, planets } = useContext(PlanetsContext);

  const filterName = useCallback((query) => {
    setFilteredPlanets(planets?.filter(({ name }) => name
      .toLowerCase().includes(query.toLowerCase())));
  }, [planets, setFilteredPlanets]);

  return useMemo(() => ({
    filterName,
  }), [filterName]);
}
