import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function Table() {
  const { filteredPlanets } = useContext(PlanetsContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets?.map((each, i) => (
          <tr key={ i }>
            <td>{each.name}</td>
            <td>{each.rotation_period}</td>
            <td>{each.orbital_period}</td>
            <td>{each.diameter}</td>
            <td>{each.climate}</td>
            <td>{each.gravity}</td>
            <td>{each.terrain}</td>
            <td>{each.surface_water}</td>
            <td>{each.population}</td>
            <td>{each.films}</td>
            <td>{each.created}</td>
            <td>{each.edited}</td>
            <td>{each.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
