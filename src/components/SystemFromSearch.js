import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleSystemByName } from '../store/system';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

export default function SystemFromSearch(props) {
  const planets = useSelector((state) => state.allPlanets);

  const dispatch = useDispatch();

  const params = useParams();
  const starName = params.starName;
  console.log(starName);
  useEffect(() => {
    dispatch(getSingleSystemByName(starName));
  }, []);
  return (
    <div>
      <NavBar style={{ position: 'sticky', top: '20px' }} />
      <div style={{ color: 'white' }}>
        <ul style={{ textAlign: 'center', color: 'white' }}>
          {planets.map((planet) => (
            <li key={planet.id}>
              <h1>{planet.planetName}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
