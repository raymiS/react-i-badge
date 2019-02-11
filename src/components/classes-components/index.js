import React, { Component } from 'react';
import * as Styled from './styles';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>This is the Header</h1>
        <h2>This is the subheader</h2>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    const { deleteOptions, pickOptions } = this.props;
    return (
      <div>
        <Styled.ActionButton onClick={pickOptions}>
          What should I do?
        </Styled.ActionButton>
        <Styled.ActionButton onClick={deleteOptions}>
          Remove Action
        </Styled.ActionButton>
      </div>
    );
  }
}

class Options extends Component {
  render() {
    const { options } = this.props;
    return (
      <ul>
        {options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    );
  }
}

const Body = ({ options, deleteOptions, pickOptions, addOption }) => {
  return (
    <div>
      <Header title={'Test Title'} />
      <Action
        addOption={addOption}
        deleteOptions={deleteOptions}
        pickOptions={pickOptions}
      />
      {options.length > 0 ? <Options options={options} /> : null}
    </div>
  );
};

export default Body;
