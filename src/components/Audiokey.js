import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { updateDisplay } from '../actions'
import './Audiokey.css';

class AudioKey extends Component {

  state = { key: {} };

  playSound = event => {
    if(this.props.power) {
      const sound = document.getElementById(event.target.innerText);
      sound.currentTime = 0;
      sound.volume = this.props.sliderVal
      sound.play();

      const { padBank } = this.props;
      const key = padBank.filter(key => key.keyTrigger === event.target.innerText);
      const display = key[0].id.replace(/-/g, ' ');
      this.props.updateDisplay(display);
    }
  }

  render() {
    const { audioKey } = this.props;
    return(
      <button 
        onClick={this.playSound}
        className="btn btn-primary drum-pad p-3">
        <audio className='clip' 
          id={audioKey.keyTrigger} 
          src={audioKey.url}>
        </audio>
        {audioKey.keyTrigger}
      </button>
    );
  }
}

const mapStateToProps = ({ power, padBank, sliderVal }) => ({
  power,
  padBank,
  sliderVal
})

export default connect(
  mapStateToProps,
  { updateDisplay }
)(AudioKey);