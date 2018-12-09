import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as councillorsActions from '../../redux-modules/councillors'
import Table from '../table'
import './app.css'

class App extends Component {
  componentDidMount() {
    const { fetching, fetched, fetchCouncillors } = this.props

    if (!fetching && !fetched) fetchCouncillors()
  }

  render() {
    const { fetching, fetched, councillors } = this.props

    const tableLoading = fetching || !fetched

    return (
      <div className="App">
        <Table loading={tableLoading} data={councillors} />
      </div>
    )
  }
}

App.propTypes = {
  fetching: PropTypes.bool.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetchCouncillors: PropTypes.func.isRequired,
  councillors: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(
  state => ({
    councillors: state.councillors.data,
    fetching: state.councillors.fetching,
    fetched: state.councillors.fetched
  }),
  {
    fetchCouncillors: councillorsActions.fetchCouncillors
  }
)(App)
