import { connect } from 'react-redux'
import React, { Component } from 'react'

function mapStateToProps(state, ownProps) {
  return {}
}

const mapDispatchToProps = {}

@connect(mapStateToProps, mapDispatchToProps)
export default class Skachat extends Component {
  render() {
    return (
      <div>
        <h1> preved </h1>
      </div>
    )
  }
}
