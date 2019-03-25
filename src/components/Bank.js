import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBank } from '../actions';

class Bank extends Component {
  changeBank = event => {
    if(this.props.power) {
      this.props.changeBank(event.target.checked);
    }
  }

  render () {
    return (
      <div className="d-flex control">          
      <h5 className="p-2 mr-2">Bank</h5>
      <label className="switch">
        <input onClick={this.changeBank} type="checkbox" disabled={!this.props.power}/>
        <span className="slider round"></span>
      </label>
    </div>
    );
  }
}

const mapStateToProps = ({ power }) => ({
  power
});

export default connect(
  mapStateToProps, 
  { changeBank }
)(Bank);