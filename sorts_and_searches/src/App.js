import React from 'react';
import SortOptns from './components/sortOptns';
import Controls from './components/controls.js';
import AlgoStatus from './components/algoStatus.js';
import Visualization from './components/visualization.js';

function App() {
  return (
    <div>
      <SortOptns />
      <AlgoStatus />
      <Controls />
      <Visualization />
    </div>
  );
}

export default App;
