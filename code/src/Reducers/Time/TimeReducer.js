import { timeTypes } from '../types';
const initialState = {
  start_time: ''
};

const TimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case timeTypes.STARTTIME:
      return {
        ...state,
        start_time: action.data

      };
    case timeTypes.CLEARHISTORYTT:
      return {
        ...state

      };

    default:
      return state;
  }
}
export default TimeReducer;