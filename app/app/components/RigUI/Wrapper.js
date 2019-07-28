// @flow
import React, { Component } from 'react'
import styles from './Wrapper.css';

import Nav from './Nav.js';
import NavItem from './NavItem.js';

import routes from '../../constants/routes';

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
          <NavItem label="HOME" icon="fas fa-home" to={routes.HOME}/>
          <NavItem label="TIME" icon="fas fa-clock" to={routes.TIMING}/>
          <NavItem label="C" icon="fas fa-forward" to={routes.TIMING}/>
          <NavItem label="T4" icon="fas fa-forward" to={routes.TIMING}/>
        </Nav>
      </div>
    );
  }
}
