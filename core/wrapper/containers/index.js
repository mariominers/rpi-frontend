import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WrapperContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  render () {
    return <div className='container' style={{marginTop: '88px'}}>
      <div className='col-12'>
        {this.props.children}
      </div>
    </div>
  }
}

export default WrapperContainer
