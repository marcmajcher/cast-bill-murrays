import React, { Component } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from '././components/YourCast';

const billUrl = 'http://localhost:3000/bills';

class App extends Component {
  state = {
    bills: [],
  };

  componentDidMount() {
    fetch(billUrl)
      .then((res) => res.json())
      .then((bills) => this.setState({ bills }));
  }

  castBill = (bill) => {
    const newBill = { ...bill, cast: true };
    this.setState({ bills: this.state.bills.map((b) => (b === bill ? newBill : b)) });
  };

  releaseBill = (bill) => {
    // this.setState({
    //   castBills: [...this.state.castBills.filter((b) => b !== bill)],
    // });
  };

  fireBill = (bill) => {
    // this.releaseBill(bill);
    // this.setState({
    //   bills: [...this.state.bills.filter((b) => b !== bill)],
    // });
  };

  render() {
    return (
      <div>
        <BillsCast
          handleClick={this.releaseBill}
          handleFire={this.fireBill}
          bills={this.state.bills.filter((bill) => bill.cast)}
        />
        <BillCollection
          handleClick={this.castBill}
          handleFire={this.fireBill}
          bills={this.state.bills}
        />
      </div>
    );
  }
}

export default App;
