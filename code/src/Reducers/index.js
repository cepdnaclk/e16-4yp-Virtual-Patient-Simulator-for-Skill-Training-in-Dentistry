import { combineReducers } from 'redux';
import userReducer from './Users/UserReducer';
import { firestoreReducer } from 'redux-firestore';
import HistoryTakingQReducer from './HistoryTakingQ/HistoryTakingQReducer';
import DentalSheetcariesReducer from './DentalSheet/DentalSheetcariesReducer';
import DentalSheetResReducer from './DentalSheet/DentalSheetResReducer';
import CaseReducer from './Case/CaseReducer';
import DiagnosisReducer from './Diagnosis/DiagnosisReducer';
import ScoreReducer from './Score/ScoreReducer';
import ExaminationReducer from './Examination/ExaminationReducer';
import InvestigationReducer from './Investigation/InvestigationReducer';
import TimeReducer from './Time/TimeReducer';

import {
  firebaseReducer
} from 'react-redux-firebase'

const rootReducer = combineReducers({
  user: userReducer,
  historyQ : HistoryTakingQReducer,
  cariesDentalMarking :DentalSheetcariesReducer,
  resDentalMarking:DentalSheetResReducer,
  firestore: firestoreReducer,
  caseSelected:CaseReducer,
  diagnosisQ : DiagnosisReducer,
  score:ScoreReducer,
  examination:ExaminationReducer, 
  investigation: InvestigationReducer,
  time:TimeReducer
  
});
export default rootReducer;

// export default combineReducers({
//   user: userReducer,
//   firestore: firestoreReducer,
//   historyQ : HistoryTakingQReducer
  
// });

