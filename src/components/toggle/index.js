import React, { Component } from 'react';

class VisibilityToggle extends Component {
  state = {
    isVisible: false
  };

  handleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <button onClick={this.handleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        {isVisible && <h1>Hello!</h1>}
      </div>
    );
  }
}

export default VisibilityToggle;
