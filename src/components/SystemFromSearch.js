import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSystemByName } from "../store/system";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import dataParser from "../util/DataParsed";
import SinglePlanetView from "./SinglePlanetView";
import { Stars } from "@react-three/drei";

export default function SystemFromSearch(props) {
  const planets = useSelector((state) => state.allPlanets);

  const singleSystem = useSelector((state) => {
    return state.singleSystem;
  });

  const dispatch = useDispatch();

  const params = useParams();
  const starName = params.starName;
  console.log(starName);
  useEffect(() => {
    dispatch(getSingleSystemByName(starName));
  }, []);

  return (
    <div>
      {console.log("PARSED SYSTEM!", dataParser(singleSystem))}
      <NavBar style={{ position: "sticky", top: "20px" }} />
      <div style={{ color: "white" }}>
        <ul style={{ textAlign: "center", color: "white" }}>
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
