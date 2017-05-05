import React, { Component } from 'react'
import Canvas from './Canvas'

export default class Board extends Component {
  render () {
    return <Canvas ref="canvas" width="300" height="300"/>
  }
}