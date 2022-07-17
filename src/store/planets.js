import axios from 'axios';

// const FETCH_PLANET = "FETCH_PLANET";
// const FETCH_PLANETS = "FETCH_PLANETS";
const GET_PLANETS_BY_TYPE = 'GET_PLANETS_BY_TYPE';
const GET_MORE_PLANETS_BY_TYPE = 'GET_MORE_PLANETS_BY_TYPE';

const gotPlanetsByType = (data) => ({ type: GET_PLANETS_BY_TYPE, data });
const gotMorePlanetsByType = (data) => ({
  type: GET_MORE_PLANETS_BY_TYPE,
  data,
});

export const getPlanetsByType = (type, offset) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://proxima-worlds-backend.herokuapp.com/api/planets/${type}`
        // { params: { offset: offset } }
      );
      dispatch(gotPlanetsByType(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getMorePlanetsByType = (type, offset) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://proxima-worlds-backend.herokuapp.com/api/planets/${type}`,
        { params: { offset: offset } }
      );
      dispatch(gotMorePlanetsByType(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];
export default function planetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANETS_BY_TYPE:
      return action.data;
    case GET_MORE_PLANETS_BY_TYPE:
      return action.data;
    default:
      return state;
  }
}
