import React from "react";

const MailingList = () => {
  return (
    <div className="mailingList">
      <div className="mailingList__wrapper container">
        <div className="mailingList__wrapper--content">
          <h4 className="subtitle">Get on the mailinglist</h4>
          <h1 className="section-title">Always up to speed</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <button className="btn btn-brown">Put me on the list</button>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
