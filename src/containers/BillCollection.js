import React, { Component } from 'react';
import BillCard from '../components/BillCard.js';

export default class BillCollection extends Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bills.map((bill) => {
            return <BillCard bill={bill} />;
          })}
        </div>
      </div>
    );
  }
}
