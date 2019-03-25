import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioKey from './Audiokey';

class Keypad extends Component {

  renderKeypad = () => {
    const { padBank } = this.props;
    return padBank.map(audioKey => <AudioKey key={audioKey.id} audioKey={audioKey} />);
  }

  render() {
    return (
      <div className="p-4 pad-bank">
        <h4 className="text-center">Keypad</h4>
        <div className="d-flex flex-wrap">
          {this.renderKeypad()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ padBank }) => ({
  padBank
});

export default connect(
  mapStateToProps, 
  null
)(Keypad);