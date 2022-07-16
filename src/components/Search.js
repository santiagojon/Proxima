import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetsByType } from '../store/planets';
import { useParams, Link } from 'react-router-dom';
import NavBar from './NavBar';
export default function SearchType(props) {
  const planets = useSelector((state) => state.allPlanets);

  const dispatch = useDispatch();

  const params = useParams();
  const type = params.type;
  useEffect(() => {
    dispatch(getPlanetsByType(type));
  }, []);
  return (
    <div>
      {/* <div style={{ color: "white" }}> */}
      <ul className="resultsContainer">
        {planets.map((planet) => (
          <div key={planet.id}>
            <Link className="searchResultLi" 
              to={`/system/${planet.starName}`}
              onClick={() => window.history.push(`/system/${planet.starName}`)}
            >
              {planet.planetName}
            </Link>
          </div>
        ))}
      </ul>
    </div>
    // </div>
  );
}
