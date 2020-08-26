import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { DarkModeToggle } from './dark-mode-toggle.component';

it('expect to render DarkModeToggle component', () => {
  expect(shallow(<DarkModeToggle />).length).toEqual(1);
});

it('tests DarkModeToggle initially', () => {
  const wrapper = mount(<DarkModeToggle />);
  expect(wrapper).toMatchSnapshot();
});

it('tests DarkModeToggle after toggling', () => {
  const wrapper = mount(<DarkModeToggle />);
  const darkModeToggleSwitch = wrapper.find('#dark-mode-toggle-switch').first();

  darkModeToggleSwitch.simulate('click');

  expect(wrapper).toMatchSnapshot();
});
