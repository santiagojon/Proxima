import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetsByType } from '../store/planets';
import { useParams } from 'react-router-dom';
export default function SearchType(props) {
  const planets = useSelector((state) => state.allPlanets);

  const dispatch = useDispatch();


  const params = useParams();
  const type = params.type;
  console.log(type);
  useEffect(() => {
    dispatch(getPlanetsByType(type));
  }, []);
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
