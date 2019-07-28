// @flow
import React, { Component } from 'react'
import styles from './NavItem.css';

import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (     
      <Link className={styles.navlink} to={this.props.to}>
        <div className={styles.navitem}>
            <div>
              <i className={this.props.icon}></i>
              <p>{this.props.label}</p>
            </div>
        </div>
      </Link>
    );
  }
}
