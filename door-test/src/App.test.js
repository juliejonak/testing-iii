import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Dashboard from './components/dashboard';
import Controls from './components/controls';
import Display from './components/display';


// it('renders without crashing', () => {
//   shallow(<App />)
// });


// describe('dashboard', () => {

//   it('renders without crashing', () => {
//     shallow(<Dashboard />)
//   })

//   it('renders the display component', () => {
//     const wrapper = shallow(<Dashboard />);
//     const display = wrapper.find('Display');

//     expect(display.length).toBe(1);
//   })

//   it('renders the control component', () => {
//     const wrapper = shallow(<Dashboard />);
//     const controls = wrapper.find('Controls');

//     expect(controls.length).toBe(1);
//   })
// })



describe('display', () => {

  it('renders without crashing', () => {
    shallow(<Display />)
    console.log('does it does it')
  })

  it('default renders false props', () => {
    const wrapper = mount(<Dashboard />);
    const display = wrapper.find('Display');
    const instance = wrapper.instance();

    expect(display.props().closed).toBe(false)
  })

  // it('renders the display panel', () => {

  // })

  // it('displays "Closed" if the closed prop is true', () => {

  // })

  // it('displays "Open" if the closed prop is false', () => {

  // })

  // it('uses the "red-led" class when "locked"', () => {

  // })

  // it('uses the "red-led" class when "closed"', () => {
    
  // })

  // it('uses the "green-led" class when "open"', () => {
    
  // })

  // it('uses the "green-led" class when "unlocked"', () => {
    
  // })

})



// describe('gate', () => {

//   it('defaults to "unlocked" and "open"', () => {
//     const wrapper = mount(<Dashboard />);
//     const instance = wrapper.instance();

//     expect(instance.state.locked).toBe(false);
//     expect(instance.state.closed).toBe(false);

//   })

//   it('does not close or open if the gate is locked', () => {
//     const wrapper = mount(<Dashboard />);
//     const lock = wrapper.find('button.lock-unlock');
//     const opener = wrapper.find('button.open-close');

//     opener.simulate('click');
//     expect(opener.text()).toBe('Open Gate');

//     lock.simulate('click');
//     expect(lock.text()).toBe('Unlock Gate')

//     opener.simulate('click');
//     expect(opener.text()).toBe('Open Gate');

//     lock.simulate('click');
//     expect(lock.text()).toBe('Lock Gate')

//     opener.simulate('click');
//     expect(opener.text()).toBe('Close Gate');
//   })
// })



// describe('controls', () => {

//   it('renders without crashing', () => {
//     shallow(<Controls />)
//   })

//   it('renders the closed and locked buttons', () => {
//     const wrapper = shallow(<Controls />)
//     const lock = wrapper.find('button.lock-unlock');
//     const opener = wrapper.find('button.open-close');
//     expect(lock.length).toBe(1);
//     expect(opener.length).toBe(1);
//   })

//   it('renders state for the buttons', () => {
//     const wrapper = mount(<Dashboard />);
//     const lock = wrapper.find('button.lock-unlock');
//     const opener = wrapper.find('button.open-close');

//     expect(lock.text()).toBe('Lock Gate');
//     expect(opener.text()).toBe('Close Gate');
//   })

//   it('changes the text of the button when the state changes', () => {
//     const wrapper = mount(<Dashboard />);
//     const lock = wrapper.find('button.lock-unlock');
//     const opener = wrapper.find('button.open-close');

//     opener.simulate('click');
//     expect(opener.text()).toBe('Open Gate');

//     lock.simulate('click');
//     expect(lock.text()).toBe('Unlock Gate')

//     lock.simulate('click');
//     expect(lock.text()).toBe('Lock Gate')
//   })

//   it('disables the close toggle button when the gate is closed', () => {
//     const wrapper = mount(<Dashboard />);
//     const lock = wrapper.find('button.lock-unlock');

//     lock.simulate('click');
//     expect(lock.text()).toBe('Lock Gate')
//   })

// })