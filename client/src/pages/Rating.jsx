import React, { useState } from 'react';
import axios from "axios";

import styles from './Rating.module.css'; // Import CSS module

const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(null);

  const handleRate = async(value) => {
    setRating(value);
    if (typeof onRate === 'function') {
        onRate(value);
      }


  
  };

  return (
    <div className={styles.RatingContainer}>
    <div className="rating-container">
      <h2>Avalie o restaurante de 0 a 9:</h2>
      <div className="rating-buttons">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
          <button key={value} onClick={() => handleRate(value)}>{value}</button>
        ))}
     
      {rating !== null && <p>Você avaliou o restaurante com {rating}.</p>}
     </div>
    </div></div>
  );
};

export default Rating;