import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../test/testUtils';

const setup = (state = {}) => {
     const wrapper = mount(<App />)

     const inputBox = findByTestAttr(wrapper, 'input-box');
     inputBox.simulate('change', { target: { value: 'train' } })

     const submitButton = findByTestAttr(wrapper, 'submit-button')
     submitButton.simulate('click', { preventDefault() { } })

     return wrapper;
}

describe("to do test describe", () => {

     test.todo("to do test for something")
})

describe.skip('no words guessed together', () => {
     let wrapper;

     beforeEach(() => {
          wrapper = setup({
               secretWord: 'party',
               success: false,
               guessedWords: []
          })
     })

     test("create guessedWords table with one row", () => {
          const guessedWordRow = findByTestAttr(wrapper, 'guessed-word')
          expect(guessedWordRow).toHaveLength(1)
     })

})

describe('some words guessed', () => {
     let wrapper;

     beforeEach(() => {
          wrapper = setup({
               secretWord: 'party',
               success: false,
               guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }]
          })

          const inputBox = findByTestAttr(wrapper, 'input-box');
          const mockEvent = { target: { value: 'party' } }
          inputBox.simulate('change', mockEvent)

          const submitButton = findByTestAttr(wrapper, 'submit-button')
          submitButton.simulate('click', { preventDefault() { } })
     })

     test("adds rows to guessed table", () => {
          const guessedWordRow = findByTestAttr(wrapper, 'guessed-word')
          expect(guessedWordRow).toHaveLength(3)
     })

     test("display congrats component", () => {
          const congrats = findByTestAttr(wrapper, 'component-congrats')
          expect(congrats.text().length).toBeGreaterThan(0)
     })

     test("does not display input component", () => {
          const inputBox = findByTestAttr(wrapper, 'input-box');
          expect(inputBox.exists()).toBe(false)

          const submitButton = findByTestAttr(wrapper, 'submit-button')
          expect(submitButton.exists()).toBe(false)
     })
})

describe('guess secret word', () => {

})