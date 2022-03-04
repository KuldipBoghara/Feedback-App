import React, { useContext, useEffect, useState } from 'react';

import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  //After creating Context
  const { feedbackEdit } = useContext(FeedbackContext);

  const handleChange = (e) => {
    //bydefalut the type is Sting
    //by using '+' we can convert String into Number
    select(+e.currentTarget.value);
    setSelected(+e.currentTarget.value);
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // simplified version
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
