// @flow
import React, { Component } from 'react'
import styles from './Wrapper.css';

import Nav from './Nav.js';
import NavItem from './NavItem.js';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.header}>
          <h1>{this.props.title}</h1>
          <h1>{this.props.info}</h1>
        </div>
        {this.props.children}

        <Nav>
          <NavItem label="A" icon="fas fa-forward" />
          <NavItem label="B" icon="fas fa-forward" />
          <NavItem label="C" icon="fas fa-forward" />
          <NavItem label="D" icon="fas fa-forward" />
        </Nav>
      </div>
    );
  }
}
