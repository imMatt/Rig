// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

import Wrapper from './RigUI/Wrapper.js';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <Wrapper title="QUALIFY MODE" info="12:42PM">
        <p>HELLO WORLD</p>
      </Wrapper>
    );
  }
}
