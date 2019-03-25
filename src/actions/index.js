import { INIT_BANK, UPDATE_DISPLAY, TOGGLE_POWER, UPDATE_VOLUME, CHANGE_BANK } from "./type";

export const loadBank = () => ({
  type: INIT_BANK
})

export const updateDisplay = display => ({
  type: UPDATE_DISPLAY,
  payload: display
})

export const togglePower = () => ({
  type: TOGGLE_POWER
})

export const changeBank = state => ({
  type: CHANGE_BANK,
  payload: state
})

export const updateVolume = (sliderVal, display) => ({
  type: UPDATE_VOLUME,
  payload: {
    sliderVal,
    display
  }
})