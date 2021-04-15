import React, { Component } from "react";
import BillCollection from './components/BillCollection'
import BillsCast from '././components/YourCast'

class App extends Component {
  state = {
    bills: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/bills')
      .then(response => response.json())
      .then(bills => {
        this.setState({ bills })
      })
  }

  render() {
    return <div>
      <BillsCast />
      <BillCollection bills={this.state.bills} />
    </div>;
  }
}

export default App;
