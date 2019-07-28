// @flow
import React, { Component } from 'react'
import styles from './Wrapper.css';

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
      </div>
    );
  }
}
