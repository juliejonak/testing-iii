import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Dashboard from './components/dashboard';
import Controls from './components/controls';
import Display from './components/display';


it('renders without crashing', () => {
  shallow(<App />)
});

//DISPLAY
// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if othewise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

//GATE
// gate defaults to `unlocked` and `open`
// gate cannot be closed or opened if it is locked

//CONTROLS
// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is closed
// - the locked toggle button is disabled if the gate is open

//DASHBOARD
// renders the controls and display