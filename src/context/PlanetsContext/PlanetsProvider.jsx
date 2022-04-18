import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '.';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    (async () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((r) => r.json())
        .then(({ results }) => {
          setFilteredPlanets(results);
          setPlanets(results);
        });
    }
    )();
  }, []);

  const memoData = useMemo(() => ({
    filteredPlanets,
    setFilteredPlanets,
    planets,
  }), [filteredPlanets, planets]);

  return (
    <PlanetsContext.Provider
      value={ memoData }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
