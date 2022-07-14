import React, { useEffect, useState } from "react";
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
      parsedPlanet = dataParser(state.singleSystem);
    }
    return parsedPlanet;
  });

  const dispatch = useDispatch();

  const params = useParams();
  const starName = params.starName;
  console.log(starName);
  useEffect(() => {
    dispatch(getSingleSystemByName(starName));
  }, []);

  // useEffect(() => {
  //   console.log("running this!");
  //   const solarSys = dataParser(singleSystem);
  //   setSolarSystem(solarSys);
  // }, [singleSystem]);

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
