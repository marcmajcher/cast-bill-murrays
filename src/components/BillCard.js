import React from 'react';

const BillCard = ({ bill }) => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bill.id}
        onClick={() => console.log('add code to connect event listener')}
      >
        <div className="image">
          <img alt="oh no!" src={bill.photo} />
        </div>
        <div className="content">
          <div className="header">{bill.name}</div>
          <div className="meta text-wrap">
            <small>{bill.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bill.health}
          </span>
          <span>
            <i className="icon dollar" />
            {bill.salary}
          </span>
          <span>
            <i className="icon star" />
            {bill.rating}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini blue button"
                onClick={() =>
                  console.log('add code to connect event listener')
                }
              >
                FIRE
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
