import React, { Component } from 'react';
import * as Styled from './styles';

class Form extends Component {
  state = {
    value: '',
    hasValue: false
  };
  handleInputChange = e => {
    this.setState({ value: e.target.value, hasValue: true });
  };
  handleButtonSubmit = e => {
    e.preventDefault();
    if (this.state.hasValue) {
      this.props.addOption(this.state.value);
      this.setState({ value: '', hasValue: false });
    }
  };
  render() {
    const { value } = this.state;

    return (
      <Styled.Form onSubmit={this.handleButtonSubmit}>
        <Styled.Input
          value={value}
          type="text"
          name="option"
          onChange={this.handleInputChange}
        />
        <Styled.Button>Add Element</Styled.Button>
      </Styled.Form>
    );
  }
}

export default Form;
