import React, { Component } from 'react'
import { draw, clear } from '../util/drawingUtil'
import drawingObservable from '../observable/drawingObservable'

export default class Canvas extends Component {

  constructor (props) {
    super(props)
    drawingObservable.clear.subscribe(this.doClear)
    drawingObservable.draw.subscribe(this.doDraw)
  }

  componentDidMount () {
    this.canvas = this.refs.canvas
    this.canvasCtx = this.canvas.getContext('2d')
  }

  onMouseDown = (e) => {
    e.preventDefault()

    const rect = this.canvas.getBoundingClientRect()
    const mouse = {x: e.pageX - rect.left, y: e.pageY - rect.top}
    this.lastMouse = mouse
    drawingObservable.draw.next({start: mouse, end: mouse})
    window.addEventListener('mousemove', this.onDrawMove)
    window.addEventListener('mouseup', () => window.removeEventListener('mousemove', this.onDrawMove))
  }

  onDrawMove = (e) => {
    const rect = this.canvas.getBoundingClientRect()
    if(e.pageX < rect.left || e.pageY < rect.top || e.pageX > rect.right || e.pageY > rect.bottom)
      return

    const start = this.lastMouse
    const end = {x: e.pageX - rect.left, y: e.pageY - rect.top}
    this.lastMouse = end
    drawingObservable.draw.next(this.createLine({start, end}))
  }

  doClear = () => {
    clear(this.canvas, this.canvasCtx)
  }

  createLine = ({start, end}) => {
    return {
      start: start,
      end: end,
      color: 'black',
      size: 8,
      compositeOperation: 'source-over'
    }
  }

  doDraw = (line) => {
    draw(this.canvas, this.canvasCtx, line)
  }

  render () {
    return <canvas onMouseDown={this.onMouseDown} ref="canvas" {...this.props}/>
  }
}