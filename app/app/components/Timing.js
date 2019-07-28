// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Timing.css';

import Wrapper from './RigUI/Wrapper.js';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  getAsDoubleDigit(v){
    if(v < 10){
      return "0" + v;
    }
    return v;
  }

  getTimeString(){
    var hr = new Date().getHours();
    if(hr == 0){
      hr = 12; //convert to support showing 12:00AM times instead of 00:00
    }

    var mins = this.getAsDoubleDigit(new Date().getMinutes());
    var secs = this.getAsDoubleDigit(new Date().getSeconds());

    return hr + ":" + mins + ":" + secs;
  }

  constructor(props){
    super(props);
    this.state = {"intervalId":-1, "time":this.getTimeString(), "timingData": []};
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer.bind(this), 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});

    this.setState({"timingData":[{
      position: 1,
      name: "M. ALLEN",
      int: -0.250,
      fastlap: 22,
      time: "1:37.750"
    },{
      position: 1,
      name: "J. GILLHAM",
      int: -0.250,
      fastlap: 22,
      time: "1:37.750"
    },{
      position: 1,
      name: "D. JONES",
      int: 1.444,
      fastlap: 22,
      time: "1:37.750"
    }]});
  }
  
  componentWillUnmount() {
      // use intervalId from the state to clear the interval
      clearInterval(this.state.intervalId);
  }
  
  timer() {
      // setState method is used to update the state
      this.setState({ time: this.getTimeString()});
  }

  render() {
    return (
      <Wrapper title="LIVE TIMING" info={this.state.time}>
        <table width="100%">
          <tr>
            <th>POS</th>
            <th>NAME</th>
            <th>INT</th>
            <th>LAP</th>
            <th>TIME</th>
          </tr>

          {this.state.timingData.map((time) => 

            <tr>
              <td>{time.position}</td>
              <td>{time.name}</td>
              <td className={time.int < 0 ? styles.red : styles.green}>{time.int}</td>
              <td>{time.fastlap}</td>
              <td>{time.time}</td>
            </tr>
          )}
        </table>
      </Wrapper>
    );
  }
}
