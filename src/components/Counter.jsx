import React from 'react';
import './counter.css'

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  count: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({type: 'increment'})
  },
  decrement: () => {
    dispatch({type: 'decrement'})
  }
})

const Counter = (props) => {
  return (
    <div className='counter'>
      <h2>Counter</h2>
        <div>
          <button onClick={props.decrement}>-</button>
          <span>{props.count}</span>
          <button onClick={props.increment}>+</button>
        </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
