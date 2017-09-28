import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

import inject from './inject';

configure({adapter: new Adapter()});
window.requestAnimationFrame = fn => setTimeout(fn, 0);

describe('inject HOC', () => {
  it('should add "newProp"', () => {
    const WrappedComponent = () => <div />;
    const Injected = inject(WrappedComponent);

    const wrapper = shallow(<Injected />);

    const props = wrapper.props();
    expect(props).toEqual({newProp: '🤑'});
  });
});
