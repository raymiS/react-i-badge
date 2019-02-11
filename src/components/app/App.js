import React, { Component } from 'react';
import Counter from '../counter';
import Forms from '../forms';
import Body from '../classes-components';
import VisibilityToggle from '../toggle';
import * as Styled from './styles';

class App extends Component {
  state = {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  };

  handleDeleteOptions = () => {
    this.setState({ options: [] });
  };

  handlePick = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    console.log(option);
  };

  handleAddOption = option => {
    console.log(option);
    this.setState(prevState => {
      return { options: prevState.options.concat(option) };
    });
  };
  render() {
    const { options } = this.state;
    return (
      <Styled.App>
        <Styled.GlobalStyles />
        React Lessons
        <Styled.Exercises>
          <Styled.ExerciseOne>
            <Counter />
            <VisibilityToggle />
          </Styled.ExerciseOne>

          <Styled.ExerciseTwo>
            <Body
              options={options}
              deleteOptions={this.handleDeleteOptions}
              pickOptions={this.handlePick}
            />
            <Forms addOption={this.handleAddOption} />
          </Styled.ExerciseTwo>
        </Styled.Exercises>
      </Styled.App>
    );
  }
}

export default App;
