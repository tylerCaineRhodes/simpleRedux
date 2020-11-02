import React, { Component } from 'react';
import './counter.css'

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  }
}



class Counter extends Component {
 
  increment = () => {
    this.props.dispatch({ type: 'increment' })
  }

  decrement = () => {
    this.props.dispatch({type: 'decrement'})
  }

  render() {
    return (
      <div className='counter'>
        <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
      </div>
    )
  }
}



export default connect(mapStateToProps)(Counter);
