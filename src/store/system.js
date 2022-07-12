import axios from 'axios';

const GET_SINGLE_SYSTEM_BY_NAME = 'GET_SINGLE_SYSTEM_BY_NAME';

const gotSingleSystem = (system) => ({
  type: GET_SINGLE_SYSTEM_BY_NAME,
  system,
});

export const getSingleSystemByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/systems/${name}`);
      console.log(data);
      dispatch(gotSingleSystem(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {};
export default function systemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_SYSTEM_BY_NAME:
      return action.system;
    default:
      return state;
  }
}
