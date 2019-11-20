import React from 'react';
import SortOptns from './components/sortOptns';
import QuickSortOptns from './components/quickSortOptns';
import Controls from './components/controls.js';
import AlgoStatus from './components/algoStatus.js';
import Visualization from './components/visualization.js';

function App() {
  return (
    <div>
      <SortOptns />
      <QuickSortOptns />
      <Controls />
      <AlgoStatus />
      <Visualization />
    </div>
  );
}

export default App;
