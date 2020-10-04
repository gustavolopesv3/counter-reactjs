import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      currentCounter: 2,
      steps: 0,
    };
  }
  handleButtonClick = (type) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter: type === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };
  render() {
    const { currentCounter, steps } = this.state;
    return (
      <div className={css.counterContainer}>
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Value value={currentCounter} />
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Steps steps={steps} />
      </div>
    );
  }
}
