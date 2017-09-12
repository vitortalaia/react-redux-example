import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/creators'

import { List } from './list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>

        <List { ...this.props } />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
