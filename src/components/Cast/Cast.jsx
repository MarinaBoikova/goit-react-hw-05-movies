import { useEffect, useState } from 'react';
import { fetchCastById } from '../../services/api';
import image from '../../images/image-not-found.png';

const Cast = ({ movieId }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCastById(movieId).then(data => setActors(data.cast));
  }, [movieId]);
  return (
    <>
      <ul>
        {actors &&
          actors.map(({ cast_id, profile_path, name, character }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
                    : image
                }
                height="175"
                width="138"
                alt={`Actor: ${name}`}
              />
              <div>
                <p>
                  <span>Character:</span> {character}
                </p>
                <p>
                  <span>Name:</span> {name}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
