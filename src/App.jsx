import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsContext/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
