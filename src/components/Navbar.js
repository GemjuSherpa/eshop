import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      // Navigation ..
      <div className="nav navbar d-flex flex-column">
        <div className="topnav d-flex justify-content-between shadow mb-2 bg-white rounded">
          <div className="left-nav">
            <p className="nav-items">
              <span>
                Hi!{" "}
                <a href="##" className="signin">
                  Sign in
                </a>{" "}
                or{" "}
                <a href="##" className="register">
                  Register
                </a>
              </span>{" "}
              |
              <span>
                <a href="##" className="deal">
                  Dailly Deals
                </a>
              </span>{" "}
              | <span>Gift Cards</span> | <span>Help & Contact</span>
            </p>
          </div>
          <div className="right-nav">
            <p className="nav-items">
              <span>
                <a href="##" className="sell">
                  Sell
                </a>
              </span>{" "}
              | <span>My eShop</span>{" "}
              <span>
                <i className="fas fa-bell" />
              </span>{" "}
              <span>
                <i className="fas fa-shopping-cart" />
              </span>
            </p>
          </div>
        </div>

        {/* Second Navigarion and Search bar */}
        <div className="brand-nav">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="##">
              eShop
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="##"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop By Category
                  </a>
                  <div className="dropdown-menu">
                    {/* Drop down modal may be */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo enim, nemo natus voluptate est ullam atque veritatis
                    quam nam culpa praesentium necessitatibus similique
                    exercitationem mollitia accusamus ex eaque quis? Voluptates!
                  </div>
                </li>
              </ul>
              <div class="input-group mr-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search anything"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
              </div>
              <div class="dropdown categories">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Category
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">
                    Electronics
                  </button>
                  <button class="dropdown-item" type="button">
                    House Holds
                  </button>
                  <button class="dropdown-item" type="button">
                    Cars & Bikes
                  </button>
                </div>
              </div>
              <button className="btn btn-primary ml-1 my-sm-0" type="submit">
                Search
              </button>
              <a href="##" className="advance ml-2">
                Advance
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
