import React from 'react';
import Counter from '../counter';
import * as Styled from './styles';

const App = () => {
  return (
    <Styled.App>
      <Styled.GlobalStyles />
      React Lessons
      <Counter />
    </Styled.App>
  );
};

export default App;
