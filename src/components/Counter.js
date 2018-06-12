import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {inCrement,onDecrement} from '../action/action'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.inCrement = this.inCrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  inCrement() {
    if (this.props.value % 2 !== 0) {
      this.props.inCrement()
    }
  }

  onDecrement() {
   this.props.onDecrement()
  }

  render() {
    const { value, inCrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={this.inCrement}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          Increment async
        </button>
      </p>
    )
  }
}

const mapStateToProps=(state)=>{
  console.log("state",state);
  return {value:state}
}
const mapDispatchToProps={inCrement,onDecrement}
Counter =connect(mapStateToProps,mapDispatchToProps)(Counter)
export default Counter