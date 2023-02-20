import { scoreTypes } from '../types';
const initialState = {
  histScore: 0,
  diagScore: 0,
  examScore: 0,
  investScore: 0,
  periodentalScreeningScore: 0,
  hardTissueScore: 0,
  cariesScore: 0,
  restorationScore: 0,
  plaqueScore: 0,
  bleedingScore: 0,
  plaqueToolScore: 0,
  bleedingToolScore: 0,
  radioScore: 0
};

const ScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case scoreTypes.DIAG_SCORE:
      return {
        ...state,
        diagScore: action.data

      };
    case scoreTypes.EXAM_SCORE:
      return {
        ...state,
        examScore: action.data

      };
    case scoreTypes.INVEST_SCORE:
      return {
        ...state,
        investScore: action.data

      };
    case scoreTypes.HIST_SCORE:
      return {
        ...state,
        histScore: action.data

      };
    case scoreTypes.PERIODENTAL_SCORE:
      return {
        ...state,
        periodentalScreeningScore: action.data

      };
    case scoreTypes.HARDTISSUE_SCORE:
      return {
        ...state,
        hardTissueScore: action.data

      };
    case scoreTypes.CARIES_SCORE:
      return {
        ...state,
        cariesScore: action.data

      };
    case scoreTypes.RESTORATION_SCORE:
      return {
        ...state,
        restorationScore: action.data

      };
    case scoreTypes.PLAQUE_SCORE:
      return {
        ...state,
        plaqueScore: action.data

      };
    case scoreTypes.BLEEDING_SCORE:
      return {
        ...state,
        bleedingScore: action.data

      };
    case scoreTypes.PLAQUE_TOOl_SCORE:
      return {
        ...state,
        plaqueToolScore: action.data

      };
    case scoreTypes.BLEEDING_TOOl_SCORE:
      return {
        ...state,
        bleedingToolScore: action.data

      };
    case scoreTypes.RADIO_SCORE:
      return {
        ...state,
        radioScore: action.data

      };
    case scoreTypes.CLEARHISTORYST:
      return {
        ...state,
        histScore: 0,
        diagScore: 0,
        examScore: 0,
        investScore: 0,
        periodentalScreeningScore: 0,
        hardTissueScore: 0,
        cariesScore: 0,
        restorationScore: 0,
        plaqueScore: 0,
        bleedingScore: 0,
        plaqueToolScore: 0,
        bleedingToolScore: 0,
        radioScore: 0

      };
    default:
      return state;
  }
}
export default ScoreReducer;