import { useState, useEffect } from 'react';
import { fetchReviewsById } from '../../services/api';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(({ id, author, content, created_at }) => (
            <li key={id}>
              <p>
                Nickname : <span> {author}</span>
              </p>
              <p>{content}</p>
              <span>
                {created_at.slice(0, 10).split('-').reverse().join('.')}
              </span>
            </li>
          ))
        ) : (
          <h1>We have not any reviews yet .</h1>
        )}
      </ul>
    </>
  );
};

export default Reviews;
