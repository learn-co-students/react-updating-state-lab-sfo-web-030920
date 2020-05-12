// Code DigitalClicker Component Here
import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor(props) {
    super();
    this.state = {
      timesClicked: 0,
    };
  }

  updateTimes = () => {
    this.setState((prevState) => {
      return { timesClicked: prevState.timesClicked + 1 };
    });
  };
  render() {
    return (
      <div>
        <label>Current counter: {this.state.timesClicked}</label>
        <button onClick={this.updateTimes}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
