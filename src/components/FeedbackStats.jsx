import React, { useContext } from 'react';
//import PropTyes from 'prop-types';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  //After creating Context
  const { feedback } = useContext(FeedbackContext);

  //calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  //To make sure it has one decemal point and
  // reg experation is to make sure it does not show 0 as decemal point
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviews</h4>
      <h4>Avarage Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

/* FeedbackStats.propTypes = {
  feedback: PropTyes.array.isRequired
};
 */

export default FeedbackStats;
