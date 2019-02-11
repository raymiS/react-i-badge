import React, { Component } from 'react';
import * as Styled from './styles';

const Button = ({ name, buttonHandler }) => (
  <Styled.Button onClick={buttonHandler}>{name}</Styled.Button>
);

class Counter extends Component {
  state = {
    count: 0
  };

  onButtonPlusClick = () => {
    //this.setState({ count: this.state.count + 1 });
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  onButtonMinusClick = () => {
    //this.setState({ count: this.state.count - 1 });
    this.setState(state => {
      return { count: state.count - 1 };
    });
  };

  onButtonResetClick = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <Styled.Count>
        <Styled.Counter>Count: {count}</Styled.Counter>
        <Button buttonHandler={this.onButtonPlusClick} name={'+1'} />
        <Button buttonHandler={this.onButtonMinusClick} name={'-1'} />
        <Button buttonHandler={this.onButtonResetClick} name={'reset'} />
      </Styled.Count>
    );
  }
}

export default Counter;
