import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanetsByType, getMorePlanetsByType } from "../store/planets";
import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Parallax } from "@react-spring/parallax";

export default function SearchType(props) {
  const planets = useSelector((state) => state.allPlanets);

  const dispatch = useDispatch();
  // let [offset, setOffset] = useState(6);

  const params = useParams();
  const type = params.type;

  // const loadNext = () => {
  //   setOffset((offset += 1));
  //   dispatch(getPlanetsByType(type));
  //   console.log(offset);
  // };

  useEffect(() => {
    dispatch(getPlanetsByType(type));
  }, []);
  return (
    <ul className="resultsContainer">
      {planets.map((planet) => (
        <div key={planet.id}>
          <Link
            key={planet.id}
            className="searchResultLi"
            to={`/system/${planet.starName}`}
            onClick={() => window.history.push(`/system/${planet.starName}`)}
          >
            <section className="main-section">
              <div className="info-card">
                <i className="car-icon"></i>
                <h1>{planet.planetName}</h1>
                <h2>
                  {Math.round(planet.planetRadiusE * 10) / 10}x the size of
                  Earth
                </h2>
              </div>
            </section>
          </Link>
        </div>
      ))}
    </ul>
  );
}
