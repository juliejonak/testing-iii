import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Dashboard from './components/dashboard';
import Controls from './components/controls';
import Display from './components/display';


it('renders without crashing', () => {
  shallow(<App />)
});



describe('dashboard', () => {

  it('renders the control and display components', () => {

  })
})



describe('display', () => {

  it('renders without crashing', () => {
    shallow(<Display />)
  })

  it('default renders false props', () => {

  })

  it('renders the display panel', () => {

  })

  it('displays "Closed" if the closed prop is true', () => {

  })

  it('displays "Open" if the closed prop is false', () => {

  })

  it('uses the "red-led" class when "locked"', () => {

  })

  it('uses the "red-led" class when "closed"', () => {
    
  })

  it('uses the "green-led" class when "open"', () => {
    
  })

  it('uses the "green-led" class when "unlocked"', () => {
    
  })

})



describe('gate', () => {

  it('defaults to "unlocked" and "open"', () => {

  })

  it('does not close or open if the gate is locked', () => {

  })
})



describe('controls', () => {

  it('renders state for the closed and locked buttons', () => {

  })

  it('changes the test of the button when the state changes', () => {

  })

  it('disables the close toggle button when the gate is closed', () => {

  })

  it('disables the lock toggle button when the gate is open', () => {

  })
})