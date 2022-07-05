import axios from "axios";

const FETCH_PLANET = "FETCH_PLANET";
const FETCH_PLANETS = "FETCH_PLANETS";


export const _fetchPlanet = (planet) => ({
  type: FETCH_PLANET,
  planet,
});

const _fetchPlanets = (planets) => {
  return {
    type: FETCH_PLANETS,
    planets,
  };
};



//THUNK CREATORS


export const fetchPlanets = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/planets');
    dispatch(_fetchPlanets(data));
  } catch (error) {
    console.log(error);
  }
};


export const fetchPlanet = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/planets/${id}`);
    dispatch(_fetchPlanet(data));
  } catch (error) {
    console.log(error);
  }
};


export default function planetReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PLANET:
      return action.planet;
      case FETCH_PLANETS:
        return action.planets;
    default:
      return state;
  }
}
