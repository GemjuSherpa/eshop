import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <div className="content-area mt-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-0 pt-0 mb-0 pb-0">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-heart" /> Saved
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Motors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fashion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Collectible&Art
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Home&Garden
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sporting Goods
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Toys
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Business&Industrial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Musics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Under $10
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div
          id="carouselExampleControls"
          className="carousel slide slider"
          data-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://loremflickr.com/640/360"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="http://placeimg.com/640/360/any"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://placekitten.com/640/360"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
