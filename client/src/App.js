import React, { Component } from "react";
import EventBox from "./Component/event-box";
import { getAllEvents } from "./utils/api.js";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    getAllEvents().then(response => {
      console.log(response.data.events.tabular.events);
      this.setState({
          events: response.data.events.tabular.events
      });
    });
  }
  render() {
    /*add or for loop or a for in loop to be able to access the api data and send it to eventBox.*/
    const events = this.state.events.map(function (c, i, a) {
      return (<EventBox key={i} event={c} />)
    })
    console.log(events)
    return <div>{events}</div>;
  }
}

export default App;
