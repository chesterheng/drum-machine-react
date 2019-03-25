import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { loadBank } from '../actions'
import Keypad from './Keypad';
import Control from './Control';

class App extends Component {

  componentDidMount() {
    this.props.loadBank();
  }

  render() {
    return (
      <Container className="d-flex justify-content-center" id="drum-machine">
        <Keypad />
        <Control />
      </Container>
    );
  }
}

export default connect(
  null,
  { loadBank }
)(App);