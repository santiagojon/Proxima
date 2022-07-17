import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSystemByName } from "../store/system";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import dataParser from "../util/DataParsed";
import { SolarSystemView } from "./SolarSystemView";

export default function SystemFromSearch(props) {
  const dispatch = useDispatch();

  const params = useParams();
  const starName = params.starName;

  useEffect(() => {
    if (starName !== "home") {
      dispatch(getSingleSystemByName(starName));
    }
  }, []);

  return (
    <div>
      <SolarSystemView search={true} />
    </div>
  );
}
