import React, { useEffect, useState } from 'react';
import useFilterByName from '../../hooks/useFilterByName';
import useFilterByNumericValue from '../../hooks/usefilterByNumericValues';
import { opt } from '../../constants';

export default function Filters() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const [options, setOptions] = useState(opt);

  const { filterName } = useFilterByName();
  const {
    filterByNumericValues,
    setStartFilter,
    filters,
    setFilters,
    removeFilter,
  } = useFilterByNumericValue();

  useEffect(() => {
    setOptions((prev) => prev.filter((each) => filters
      .every((fill) => !each.includes(fill.column))));
  }, [filters]);

  const eventFilterByName = ({ target }) => filterName(target.value);

  const eventFilterByNumericValues = () => {
    filterByNumericValues({ column, comparison, value });
    setStartFilter(true);
  };

  return (
    <div>
      <div>
        <input data-testid="name-filter" type="text" onChange={ eventFilterByName } />
      </div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
          value={ opt[0] }
        >
          {options.map((each, i) => (
            <option key={ i } value={ each }>{each}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ eventFilterByNumericValues }
        >
          Filtrar
        </button>
        <button
          data-testid="button-remove-filters"
          type="button"
          onClick={ () => {
            setFilters([]);
            setStartFilter(true);
          } }
        >
          REMOVE FILTROS
        </button>
      </div>
      <div>
        {filters.map((each, i) => (
          <div
            key={ i }
            data-testid="filter"
          >
            {`${each.column} ${each.comparison} ${each.value}`}
            <button
              type="button"
              onClick={ () => {
                removeFilter(each.column);
                setStartFilter(true);
              } }
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
