import React, { Component } from 'react'
import Tool from './Tool'
import Board from './Board'
import Information from './Information'

export default class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className="container">
      <Tool/>
      <Board/>
      <Information/>
    </div>
  }
}