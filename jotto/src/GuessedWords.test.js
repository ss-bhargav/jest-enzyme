import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from './../test/testUtils'
import GuessedWords from './GuessedWords'
import checkPropTypes from 'check-prop-types';

const defaultProps = {
     guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
}

const setup = (props) => {
     const setupProps = { ...defaultProps, ...props };
     return shallow(<GuessedWords {...setupProps} />)
}

test("Do not throw error warning with expected props", () => {
     const check = checkPropTypes(GuessedWords.propTypes, defaultProps, "props", GuessedWords.name)
     expect(check).toBeUndefined()
})



describe("if there are no words guessed", () => {
     let wrapper;

     beforeEach(() => {
          wrapper = setup({ guessedWords: [] })
     })

     test("render without errors", () => {
          const component = findByTestAttr(wrapper, "component-guessed-words")
          expect(component.length).toBe(1)
     })

     test("render instructions to guess the words", () => {
          const instructions = findByTestAttr(wrapper, "guess-instructions")
          expect(instructions.text().length).not.toBe(0)
     })
})

describe("if there are words guessed", () => {
     let wrapper;

     let guessedWords = [
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "agile", letterMatchCount: 1 },
          { guessedWord: "party", letterMatchCount: 5 }
     ]

     beforeEach(() => {
          wrapper = setup({ guessedWords })
     })

     test("render without errors", () => {
          const component = findByTestAttr(wrapper, "component-guessed-words")
          expect(component.length).toBe(1)
     })

     test("render 'guessed words' section", () => {
          const guessedWordsNode = findByTestAttr(wrapper, "guessed-words")
          expect(guessedWordsNode.length).toBe(1)
     })

     test("correct number of guessed words", () => {
          const guessedWordNodes = findByTestAttr(wrapper, "guessed-word")
          expect(guessedWordNodes.length).toBe(guessedWords.length)
     })
})