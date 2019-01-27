import React, { Component } from 'react';
import Button from '../event-handlers';
import * as Styled from './styles';

class Counter extends Component {
  state = {
    count: 0
  };

  onButtonPlusClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onButtonMinusClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onResetClick = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <Styled.Count>
        <Styled.Counter>Count</Styled.Counter>
        <Button buttonName={'+1'} />
        <Button buttonName={'-1'} />
        <Button buttonName={'reset'} />
      </Styled.Count>
    );
  }
}

export default Counter;
