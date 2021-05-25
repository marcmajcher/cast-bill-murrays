import React, { Component } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from '././components/YourCast';

const billUrl = 'http://localhost:6001/bills';
const headers = {
  Accepts: 'application/json',
  'Content-type': 'application/json',
};

class App extends Component {
  state = {
    bills: [],
  };

  componentDidMount() {
    fetch(billUrl)
      .then((res) => res.json())
      .then((bills) => this.setState({ bills }));
  }

  doFetch = (method, callback, body) => {
    fetch(`${billUrl}/${bill.id}`, {
      method,
      headers,
      body,
    })
      .then(callback)
      .catch((err) => console.error(err));
  };

  setBillCast = (bill, cast) => {
    this.doFetch(
      'PATCH',
      () => {
        const newBill = { ...bill, cast };
        this.setState({
          bills: this.state.bills.map((b) =>
            b === bill ? { ...bill, cast } : b
          ),
        });
      },
      { cast }
    );
  };

  castBill = (bill) => {
    this.setBillCast(bill, true);
  };

  releaseBill = (bill) => {
    this.setBillCast(bill, false);
  };

  fireBill = (bill) => {
    this.doFetch('DELETE', () =>
      this.setState({
        bills: [...this.state.bills.filter((b) => b !== bill)],
      })
    );
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
