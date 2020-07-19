import React from 'react';
import './App.css';

import DropdownAutocomplete from './components/DropdownAutocomplete/DropdownAutocomplete';
import * as mockData from './mockData.json';

function App() {
  const getDropdownAutocompleteValue = value => {
    console.log('DropdownAutocomplete value:', value);
  };

  return (
    <div className="App">
      <DropdownAutocomplete
        options={mockData.options}
        getValue={getDropdownAutocompleteValue}
      />
    </div>
  );
}

export default App;
