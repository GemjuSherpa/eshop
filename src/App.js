import React, { Component } from "react";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <hr className="mt-0 mb-0" />
        <Content />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
