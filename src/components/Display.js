import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render () {
    return(
      <div>
        <h5 className="text-center text-muted">Display</h5>
        <p className="text-center bg-secondary display w-100 p-2 h-auto">{this.props.display}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ display }) => ({
  display
});

export default connect(mapStateToProps)(Display);