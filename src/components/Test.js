import { useDispatch, useSelector } from 'react-redux';
import { getSingleSystemByName } from '../store/system';
import { useEffect, useState } from 'react';
import { getaAllSystems } from '../store/allSystems';

export default function Test() {
  const dispatch = useDispatch();
  // const system = useSelector((state) => state.singleSystem || {});
  const systems = useSelector((state) => state.allSystems || []);
  // const [systemData, setSystemData] = useState({});

  useEffect(() => {
    // dispatch(getSingleSystemByName('proxima'));
    dispatch(getaAllSystems());
  });
  console.log(systems);
  return (
    <div>
      <h1>hello</h1>
      {/* <p>{system.planetName}</p> */}
    </div>
  );
}
