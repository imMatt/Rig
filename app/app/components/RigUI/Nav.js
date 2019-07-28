// @flow
import React, { Component } from 'react'
import styles from './Wrapper.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.nav}>
        {this.props.children}
      </div>
    );
  }
}
