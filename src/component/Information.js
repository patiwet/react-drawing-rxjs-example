import React, { Component } from 'react'
import drawingStore from '../store/drawingStore'
import drawingObservable from '../observable/drawingObservable'

export default class Information extends Component {
  constructor (props) {
    super(props)

    drawingObservable.draw.subscribe(() => this.forceUpdate())
    drawingObservable.clear.subscribe(() => this.forceUpdate())
  }

  render () {
    return <div>{drawingStore.lines.length}</div>
  }
}