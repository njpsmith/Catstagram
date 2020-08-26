import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Logo from './logo.component';

it('expect to render Logo component', () => {
  expect(shallow(<Logo />).length).toEqual(1);
});

// it(‘correctly incrememnets the counter’, () => {
//   mockColour = 'red';
//   const wrapper = shallow(<CounterButton colour={mockColour} />);

//   wrapper.find([id="counter"]).simulate('click');
//   wrapper.find([id="counter"]).simulate('click');

//   expect(wrapper.state()).toEqual({ count: 2 });

//   expect(wrapper.props()).toEqual({ colour: 'red', //etc });
//   expect(wrapper.props().colour).toEqual('red');
// })
