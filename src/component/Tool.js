import React, { Component } from 'react'
import drawingObservable from '../observable/drawingObservable'

export default class Tool extends Component {

  constructor (props) {
    super(props)
  }

  clearClick = () => {
    drawingObservable.clear.next()
  }

  render () {
    return <div className="tool">
      <button onClick={this.clearClick}>Clear</button>
    </div>
  }
}