import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanetsByType } from "../store/planets";
import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";
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
      <div style={{ color: "white" }}>
        <ul style={{ textAlign: "center", color: "white" }}>
          {planets.map((planet) => (
            <li key={planet.id}>
              <h3>
                <Link
                  to={`/system/${planet.starName}`}
                  onClick={() =>
                    window.history.push(`/system/${planet.starName}`)
                  }
                >
                  {planet.planetName}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
