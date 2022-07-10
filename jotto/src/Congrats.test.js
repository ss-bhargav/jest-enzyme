import React from 'react';
import  { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

import checkPropTypes from 'check-prop-types';

const setup = (props = {}) => {
     return shallow(<Congrats {...props} />)
}

test("render without any errors", () => {
     const wrapper = setup();
     const compnent = findByTestAttr(wrapper, 'component-congrats');
     expect(compnent.length).toBe(1);
})

test("render no text when 'Success' props is false", () => {
     const wrapper = setup({ success: false });
     const component = findByTestAttr(wrapper, 'component-congrats');
     expect(component.text()).toBe("")
})

test("render non-empty congrats message when 'Success' props is true", () => {
     const wrapper = setup({ success: true });
     const message = findByTestAttr(wrapper, 'congrats-message')
     expect(message.text().length)
          .not
          .toBe(0)
})

test("Check for props types and throw error instead of a warning", () => {
     const props = { success: true };
     const check = checkPropTypes(Congrats.propTypes, props, "props", Congrats.name)
     expect(check).toBeUndefined()
})