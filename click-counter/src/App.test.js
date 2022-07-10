import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const wrappComponent = () => shallow(<App />)

const findByTextAttr = (wrapper, text) => wrapper.find(`[data-test='${text}']`)

test("Render without error", () => {
     let wrapper = wrappComponent()
     let appComponent = findByTextAttr(wrapper, 'component-app')  
     expect(appComponent.length).toBe(1)
})

test("Renders increment button", () => {
     let wrapper = wrappComponent()
     let button = findByTextAttr(wrapper, 'increment-button')
     expect(button.length).toBe(1)
})

test("Renders counter display", () => {
     let wrapper = wrappComponent()
     let counterDisplay = findByTextAttr(wrapper, 'counter-display')
     expect(counterDisplay.length).toBe(1)
})

test("Counter starts at zero", () => {
     let wrapper = wrappComponent()
     let count = findByTextAttr(wrapper, 'count').text();
     expect(count).toBe("0")
})

test("Clicking on button increments counter display", () => {
     let wrapper = wrappComponent()
     ////// Find the button 
     let button = findByTextAttr(wrapper, 'increment-button')

     ////// Click the button 
     button.simulate('click')

     ////// Find the display count and test the count is incremented
     let count = findByTextAttr(wrapper, 'count').text();
     expect(count).toBe("1")
})

// test("Clicking on button decrements counter display", () => {
//      let wrapper = wrappComponent()

//      let button = wrapper.find("[data-test='decrement-button']")

//      button.simulate("click")

//      let count = wrapper.find("[data-test='count']").text();

//      expect(count).toBe("-1")
// })

test("count should not be less than zero", () => {
     


})