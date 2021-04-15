import React, { Component } from "react";
import BillCard from '../components/BillCard.js'

export default class BillCollection extends Component {

  renderBillCard = (props) => {
    this.props.bills.map(bill => {
      return <BillCard
        bill={props.bill} />
    })
  }
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBillCard}
        </div>
      </div>
    );
  }
}
