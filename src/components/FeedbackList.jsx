import React, { useContext } from 'react';
//import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  //After creating Context
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              /*  handleDelete={handleDelete} */
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //without Animation
  /*   return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  ); */
};

/* FeedbackList.propTypes = {
  //Proptypes for all elements (even part of prop array)
  /* feedback: PropTypes.arrayof(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ) 
  
  //not compulsory to define proptype of all elements
  feedback: PropTypes.array.isRequired
};
 */

export default FeedbackList;
