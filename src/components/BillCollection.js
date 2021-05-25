import React, { Component } from 'react';
import BillCard from './BillCard.js';

export default class BillCollection extends Component {
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bills.map((bill) => (
            <BillCard
              key={bill.id}
              bill={bill}
              handleClick={this.props.handleClick}
              handleFire={this.props.handleFire}
            />
          ))}
        </div>
      </div>
    );
  }
}
