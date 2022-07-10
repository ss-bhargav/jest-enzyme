import React from 'react';
import PropTypes from 'prop-types'

const Congrats = ({ success }) => {

     if (success) {
          return (
               <div data-test='component-congrats' className='alert alert-success'>
                    <span data-test='congrats-message'>
                         Congratulation! You guessed the word
                    </span>
               </div>
          )
     } else {
          return (
               <div data-test='component-congrats'></div>
          )
     }
}

Congrats.propTypes = {
     success: PropTypes.bool,
}

export default Congrats;
