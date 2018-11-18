import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content d-flex justify-content-around ">
          <div className="buy">
            <h2>Buy</h2>
            <ul>
              <li>Registration</li>
              <li>Ebay Money Guarantee's</li>
              <li>Bidding and Buying Help</li>
              <li>Stores</li>
            </ul>
          </div>
          <div className="sell">
            <h2>Sell</h2>
            <ul>
              <li>Registration</li>
              <li>Ebay Money Guarantee's</li>
              <li>Bidding and Buying Help</li>
              <li>Stores</li>
            </ul>
          </div>
          <div className="stay-connected">
            <h2>Stay Connected</h2>
            <ul>
              <li>Registration</li>
              <li>Ebay Money Guarantee's</li>
              <li>Bidding and Buying Help</li>
              <li>Stores</li>
            </ul>
          </div>
          <div className="about">
            <h2>About eshop</h2>
            <ul>
              <li>Registration</li>
              <li>Ebay Money Guarantee's</li>
              <li>Bidding and Buying Help</li>
              <li>Stores</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; 2000-2018 eShop Pty. Ltd. All rights reserved.
            Accessibility, User Agreement, Privary, Cookies
          </p>
        </div>
      </div>
    );
  }
}
