import { investTypes } from '../types';
const initialState = {
  radioSelections: []
};

const InvestigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case investTypes.RADIOSELECTION:
      return {
        ...state,
        radioSelections: action.data
      };

    case investTypes.CLEARHISTORYIT:
      return {
        ...state,
        radioSelections: []
      };

    default:
      return state;
  }
}
export default InvestigationReducer;