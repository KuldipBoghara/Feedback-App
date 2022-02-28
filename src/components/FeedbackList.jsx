import React from 'react';
import PropTypes from 'prop-types';

import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  //Proptypes for all elements (even part of prop array)
  /* feedback: PropTypes.arrayof(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ) */
  //not compulsory to define proptype of all elements
  feedback: PropTypes.array.isRequired
};

export default FeedbackList;
