import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSystemByName } from "../store/system";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import dataParser from "../util/DataParsed";
import { SolarSystemView } from "./SolarSystemView";

export default function SystemFromSearch(props) {
  const singleSystem = useSelector((state) => {
    let parsedPlanet = null;
    if (state.singleSystem !== {}) {
      parsedPlanet = state.singleSystem;
    }
    return parsedPlanet;
  });

  const dispatch = useDispatch();

  const params = useParams();
  const starName = params.starName;

  useEffect(() => {
    dispatch(getSingleSystemByName(starName));
  }, []);

  return (
    <div>
      {singleSystem !== null ? (
        <SolarSystemView solarSystem={singleSystem} />
      ) : (
        ""
      )}
    </div>
  );
}
