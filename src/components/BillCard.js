import React from "react";


const BillCard = props => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bill.id}
        onClick={() => console.log("add code to connect event listener")}
      >
        <div className="image">
          <img alt="oh no!" src={props.bill.photo} />
        </div>
        <div className="content">
          <div className="header">
            {props.bill.name}
            {/* <i className={billTypeClasses[props.bill.bill_class]} /> */}
          </div>
          <div className="meta text-wrap">
            <small>{props.bill.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bill.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bill.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bill.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
