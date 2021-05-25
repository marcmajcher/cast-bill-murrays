import React, { Component } from 'react';
import BillCard from './BillCard';

class YourCast extends Component {
  render() {
    return (
      <div className="ui segment inverted blue bill-cast">
        <div className="ui five column grid">
          <div className="row bill-cast-row">
            Your Cast of Bill Murrays
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
      </div>
    );
  }
}

export default YourCast;
