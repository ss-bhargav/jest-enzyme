import React from 'react';
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../test/testUtils'
import Input from './Input'

const setup = (success = false, secretWord = "party") => {
     return shallow(<Input success={success} secretWord={secretWord} />)
}

// const mockSetCurrentGuess = jest.fn();

// jest.mock("react", () => ({
//      ...jest.requireActual('react'),
//      useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

describe("render", () => {

     describe('Success is true', () => {
          let wrapper;

          beforeEach(() => {
               wrapper = setup(true);
          })

          test("Input renders without error", () => {
               const inputComponent = findByTestAttr(wrapper, "component-input")
               expect(inputComponent.length).toBe(1)
          })

          test("Input box does not show", () => {
               const inputBox = findByTestAttr(wrapper, "input-box");
               expect(inputBox.exists()).toBe(false)
          })

          test("Submit button does not show", () => {
               const submitButton = findByTestAttr(wrapper, "submit-button")
               expect(submitButton.exists()).toBe(false)
          })
     })

     describe('Success is  false', () => {
          
     })
})


test("Does not throw warning with an expected props", () => {
     checkProps(Input, { secretWord: "party" })
})

describe("State controlled input field", () => {
     let mockSetCurrentGuess = jest.fn();
     let wrapper;
     let originalUseState;

     beforeEach(() => {
          mockSetCurrentGuess.mockClear();
          originalUseState = React.useState;
          React.useState = () => ["", mockSetCurrentGuess]
          wrapper = setup()
     })

     afterEach(() => {
          React.useState = originalUseState
     })

     test("states updates with value of input box upon change", () => {
          const inputBox = findByTestAttr(wrapper, "input-box");
          const mockEvent = { target: { value: "train" } }
          inputBox.simulate("change", mockEvent)
          expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
     })

     test("field is clear upon submitting the button click", () => {
          const submitButton = findByTestAttr(wrapper, "submit-button");
          submitButton.simulate("click", { preventDefault() { } })
          expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
     })
})