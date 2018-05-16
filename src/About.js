import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div>
        <p>About</p>
        <button className="square" onClick={() => alert('click')}>
          OK
        </button>
      </div>
    );
  }
}
