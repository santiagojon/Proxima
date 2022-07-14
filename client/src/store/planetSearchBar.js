import axios from 'axios';

const GET_PLANETS_BY_NAME = 'GET_PLANETS_BY_NAME';

const gotPlanetsByName = (data) => ({ type: GET_PLANETS_BY_NAME, data });

export const getPlanetsByName = (planetName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/planets/name/${planetName}`);
      dispatch(gotPlanetsByName(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];
export default function planetSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS_BY_NAME:
      return action.data;
    default:
      return state;
  }
}
