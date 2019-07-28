// @flow
import React, { Component } from 'react'
import styles from './NavItem.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.navitem}>
        <div>
          <i class={this.props.icon}></i>
          <p>{this.props.label}</p>
        </div>
      </div>
    );
  }
}
