import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePower } from '../actions'

class Power extends Component {

  togglePower = () => {
    this.props.togglePower();
  }

  render() {
    return (
      <div className="d-flex control">
      <h5 className="p-2 mr-2">Power</h5>
      <label className="switch">
        <input onClick={this.togglePower} type="checkbox" defaultChecked />
        <span className="slider round"></span>
      </label>
    </div>
    );
  }
}

export default connect(
  null,
  { togglePower }
)(Power);