import React from 'react'
import { connect } from 'react-redux'

import Main from './../components/main'

class MainContainer extends React.Component {
  componentWillMount () {
    this.state = {
      dataLoaded: false
    }

    this.getData()
  }

  getData = () => {
    setTimeout(() => this.setState({dataLoaded: true}), 5000)
  }

  render () {
    const { dataLoaded } = this.state

    if (!dataLoaded) {
      return <div className='d-flex justify-content-center'>Loading...</div>
    }

    return (<Main />)
  }
}

const mapStateToProps = (state) => {
  return { }
}

export default connect(mapStateToProps)(MainContainer)
