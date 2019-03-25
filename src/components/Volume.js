import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVolume } from '../actions';

class Volume extends Component {
  
  adjustVolume = event => {
    if(this.props.power) {
      const sliderVal = event.target.value;
      const display = `Volume: ${Math.round(event.target.value * 100)}`;
      this.props.updateVolume(sliderVal, display);
    }
  }

  render () {
    return (
      <div className="volume-slider">
      <div className="form-group">
        <label className="text-muted" htmlFor="volumn">Adjust Volume</label>
        <input 
          className="custom-range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={this.props.sliderVal} 
          type="range"
          onChange={this.adjustVolume}  />
      </div>
    </div>
    );
  }
}

const mapStateToProps = ({ sliderVal, power }) => ({
  sliderVal,
  power
});

export default connect(
  mapStateToProps,
  { updateVolume }
)(Volume);