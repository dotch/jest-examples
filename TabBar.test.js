import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import TabBar from './TabBar';

configure({adapter: new Adapter()});

describe('TabBar Component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<TabBar items={['zebra', 'elephant']} selectedIndex={1} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('renders correctly (enzyme)', () => {
    const component = shallow(
      <TabBar items={['zebra', 'elephant']} selectedIndex={1} />
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
