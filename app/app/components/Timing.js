// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Timing.css';

import Wrapper from './RigUI/Wrapper.js';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props){
    super(props);
    this.state = {"intervalId":-1, "time":new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()};
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer.bind(this), 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }
  
  componentWillUnmount() {
      // use intervalId from the state to clear the interval
      clearInterval(this.state.intervalId);
  }
  
  timer() {
      // setState method is used to update the state
      this.setState({ time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() });
  }

  render() {
    return (
      <Wrapper title="LIVE TIMING" info={this.state.time}>
        <p>HI</p>
      </Wrapper>
    );
  }
}
