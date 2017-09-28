import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

import Button from './Button';

configure({adapter: new Adapter()});
window.requestAnimationFrame = fn => setTimeout(fn, 0);

describe('Button Component', () => {
  it('should contain the right text', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.text()).toBe('Click me!');
  });

  it('should call the onClick handler when clicked', () => {
    const onClickSpy = jest.fn();

    const wrapper = shallow(<Button onClick={onClickSpy} />);
    wrapper.find('button').simulate('click');

    expect(onClickSpy).toHaveBeenCalledWith('🤔');
  });
});
