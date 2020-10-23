import React, { Component } from 'react';


class Counter extends Component {
  constructor(){
    super();

    this.state = {count: 0}

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
  }

  decrement() {
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
      </div>
    )
  }
}



export default Counter;
