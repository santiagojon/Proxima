import axios from 'axios';

// const FETCH_PLANET = "FETCH_PLANET";
// const FETCH_PLANETS = "FETCH_PLANETS";
const GET_PLANETS_BY_TYPE = 'GET_PLANETS_BY_TYPE';

// export const _fetchPlanet = (planet) => ({
//   type: FETCH_PLANET,
//   planet,
// });

const gotPlanetsByType = (data) => ({ type: GET_PLANETS_BY_TYPE, data });

// const _fetchPlanets = (planets) => {
//   return {
//     type: FETCH_PLANETS,
//     planets,
//   };
// };

//THUNK CREATORS

export const getPlanetsByType = (type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/planets/${type}`);
      // console.log(data);
      dispatch(gotPlanetsByType(data));
    } catch (error) {
      console.error(error);
    }
  };
};

// export const fetchPlanet = (id) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/planets/${id}`);
//     dispatch(_fetchPlanet(data));
//   } catch (error) {
//     console.log(error);
//   }
// };
const initialState = [];
export default function planetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS_BY_TYPE:
      return action.data;
    // case FETCH_PLANET:
    // return action.planet;
    // case FETCH_PLANETS:
    // return action.planets;
    default:
      return state;
  }
}
