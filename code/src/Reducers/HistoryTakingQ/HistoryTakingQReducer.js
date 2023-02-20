import { historyTakingQTypes } from '../types';
const initialState = {
  allHistoryTakingQ: [],
  countCorrectHistoryTaking: 0,
  sectionOrder: [],
  // selectedQForHistoryT:[],
  selectedQdata: []
};

const setCount = (array3) => {
  let count = 0
  for (let i = 0; i < array3.length; i++) {
    if (array3[i].correctness) {
      count++
    }
  }
  return count
}

const setSelectedQ = (array2, item) => {

  console.log(array2, initialState.correctDiagnosisQ, item)
  if (array2.length != 0) {
    for (let i = 0; i < array2.length; i++) {
      console.log(array2[i].id, item.id)
      if (array2[i].id == item.id) {
        return array2;
      }
    }
    return array2.concat(item)
  }
  else {
    return array2.concat(item)
  }

}

const HistoryTakingQReducer = (state = initialState, action) => {
  switch (action.type) {
    case historyTakingQTypes.CREATE_CASE_Q:
      return {
        ...state,
        selectedQdata: setSelectedQ(state.selectedQdata, action.data)

      };
    case historyTakingQTypes.ALLHISTORYTAKINGQ:
      return {
        ...state,
        allHistoryTakingQ: action.data
      };
    case historyTakingQTypes.SETCOUNT:
      return {
        ...state,
        countCorrectHistoryTaking: setCount(action.data)
      };
    case historyTakingQTypes.SECTIONORDER:
      return {
        ...state,
        sectionOrder: state.sectionOrder.concat(action.data)
      };
    case historyTakingQTypes.CLEARHISTORYQ:
      return {
        ...state,
        countCorrectHistoryTaking: 0,
        sectionOrder: [],
        selectedQdata: []
      };


    default:
      return state;
  }
}
export default HistoryTakingQReducer;