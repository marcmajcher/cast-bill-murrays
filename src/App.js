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

  setBillCast = (bill, cast) => {
    fetch(`${billUrl}/${bill.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ cast }),
    })
      .then(() => {
        const newBill = { ...bill, cast };
        this.setState({
          bills: this.state.bills.map((b) => (b === bill ? newBill : b)),
        });
      })
      .catch((err) => console.error(err));
  };

  castBill = (bill) => {
    this.setBillCast(bill, true);
  };

  releaseBill = (bill) => {
    this.setBillCast(bill, false);
  };

  fireBill = (bill) => {
    fetch(`${billUrl}/${bill.id}`, {
      method: 'DELETE',
      headers,
    })
      .then(() =>
        this.setState({
          bills: [...this.state.bills.filter((b) => b !== bill)],
        })
      )
      .catch((err) => console.error(err));
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
