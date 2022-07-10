import React from 'react';
import PropTypes from 'prop-types'

const Input = ({ success, secretWord }) => {
     const [currentGuessedWord, setCurrentGuessedWord] = React.useState("")

     if(success) {
          return <div data-test="component-input"></div>
     }

     return (
          <div data-test="component-input">
               <form className="form-inline">
                    <input
                         type="text"
                         data-test="input-box"
                         className="form-control mb-2 mx-sm-3"
                         placeholder="Enter guessed word"
                         value={currentGuessedWord}
                         onChange={(event) => setCurrentGuessedWord(event.target.value)}
                    />
                    <button
                         type="submit"
                         data-test="submit-button"
                         className="btn btn-primary"
                         onClick={(event) => {
                              event.preventDefault()
                              setCurrentGuessedWord("")
                         }}
                    >
                         Submit
                    </button>
               </form>
          </div>
     )
}

Input.propTypes = {
     success: PropTypes.bool,
     secretWord: PropTypes.string.isRequired,
}

export default Input;