import { config, BANK_ONE, BANK_TWO, HEATER_KIT, SMOOTH_PIANO_KIT, SPACE } from '../config';
import { INIT_BANK, UPDATE_DISPLAY, TOGGLE_POWER, UPDATE_VOLUME, CHANGE_BANK } from '../actions/type';

const INITIALSTATE = { 
  padBank: config[BANK_ONE],
  padBankId: HEATER_KIT,
  power: true,
  display: SPACE,
  sliderVal: 0.3
}

const reducer = (state = INITIALSTATE, action) => {
  switch(action.type) {
    case INIT_BANK: return INITIALSTATE;
    case UPDATE_DISPLAY: return { 
      ...state, 
      display: action.payload 
    }
    case TOGGLE_POWER: return { 
      ...state, 
      power: !state.power, 
      display: SPACE 
    }
    case UPDATE_VOLUME: return { 
      ...state, 
      sliderVal: action.payload.sliderVal, 
      display: action.payload.display
    }
    case CHANGE_BANK: {
      if(action.payload === true) {
        return { 
          ...state, 
          padBank: config[BANK_ONE], 
          padBankId: HEATER_KIT,
          display: HEATER_KIT
        } 
      } 
      else {
        return { 
          ...state, 
          padBank: config[BANK_TWO], 
          padBankId: SMOOTH_PIANO_KIT,
          display: SMOOTH_PIANO_KIT
        };
      }
    }
    default: return state;
  }
}

export default reducer;