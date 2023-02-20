import { caseTypes } from '../types';
const initialState = {
  selectedCaseDetails: [],
  allCaseData: []
};

const CaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case caseTypes.SETCASE:
      return {
        ...state,
        selectedCaseDetails: action.data

      };
    case caseTypes.SETALLCASES:
      return {
        ...state,
        allCaseData: action.data

      };
    case caseTypes.CLEARHISTORYCT:
      return {
        ...state,
        selectedCaseDetails: []

      };


    default:
      return state;
  }
}
export default CaseReducer;