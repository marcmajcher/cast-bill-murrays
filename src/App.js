import React, { Component } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from '././components/YourCast';

class App extends Component {
  render() {
    return (
      <div>
        <BillsCast />
        <BillCollection />
      </div>
    );
  }
}

export default App;
