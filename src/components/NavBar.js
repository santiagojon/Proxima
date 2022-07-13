import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetsByType } from '../store/planets';

export default function NavBar() {
  const planets = useSelector((state) => state.allPlanets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanetsByType('Gas Giant'));
  }, []);
  console.log(planets);
  return (
    <div style={{ color: 'white' }}>
      NavBar
      <h1>hello</h1>
      <ul style={{ textAlign: 'center', color: 'white' }}>
        {planets.map((planet) => (
          <li key={planet.id}>
            <h1>{planet.planetName}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
