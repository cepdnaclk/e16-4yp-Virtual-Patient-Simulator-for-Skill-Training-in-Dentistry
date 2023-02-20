import { examTypes } from '../types';
const initialState = {
  selectedPerodentalTools: {},
  submit_perio_tools: false,
  submitedHardTissueTools: {},
  submit_hard_tools: false,
  cariesSelected: [],
  restorationsSelected: [],
  plaqueValue: '',
  bleedingValue: '',
  newcarries: [],
  newresto: []
};


const setCaries = (array2, item) => {
  console.log(array2)
  if (array2.length != 0) {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] == item) {
        return array2;
      }
    }
    return array2.concat(item)
  }
  else {
    return array2.concat(item)
  }

}

const setResto = (array2, item) => {
  console.log(array2)
  if (array2.length != 0) {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] == item) {
        return array2;
      }
    }
    return array2.concat(item)
  }
  else {
    return array2.concat(item)
  }

}
const addPeroTools = (array, item) => {
  let val = ''
  let bool = false
  for (let key in item) {
    val = key
    bool = item[key]

  }
  console.log(val, bool)
  array[val] = bool
  console.log(array)

  return array
}

const addHardTools = (array, item) => {
  let val = ''
  let bool = false
  for (let key in item) {
    val = key
    bool = item[key]

  }
  console.log(val, bool)
  array[val] = bool
  console.log(array)

  return array
}


const ExaminationReducer = (state = initialState, action) => {
  switch (action.type) {
    case examTypes.PERIODENTALTOOLS:
      return {
        ...state,
        selectedPerodentalTools: action.data

      };
    case examTypes.PERIO_SUBMIT:
      return {
        ...state,
        submit_perio_tools: action.data

      };
    case examTypes.HARDTISSUETOOLS:
      return {
        ...state,
        submitedHardTissueTools: action.data

      };
    case examTypes.HARDTISSUE_SUBMIT:
      return {
        ...state,
        submit_hard_tools: action.data

      };
    case examTypes.SELECTEDCARIES:
      return {
        ...state,
        cariesSelected: setCaries(state.cariesSelected, action.data)

      };
    case examTypes.SELECTEDRESTORATIONS:
      return {
        ...state,
        restorationsSelected: setResto(state.restorationsSelected, action.data)

      };
    case examTypes.CLEARCARIES:
      return {
        ...state,
        cariesSelected: []

      };
    case examTypes.CLEARRESTO:
      return {
        ...state,
        restorationsSelected: []

      };
    case examTypes.PLAQUEVAL:
      return {
        ...state,
        plaqueValue: action.data

      };
    case examTypes.BLEEDINGVAL:
      return {
        ...state,
        bleedingValue: action.data

      };
    case examTypes.NEWSETCARRIES:
      return {
        ...state,
        newcarries: action.data

      };
    case examTypes.NEWSETRESTO:
      return {
        ...state,
        newresto: action.data

      };
    case examTypes.PERIOTOOLCHECKBOX:
      return {
        ...state,
        selectedPerodentalTools: addPeroTools(state.selectedPerodentalTools, action.data)

      };
    case examTypes.HARDTOOLCHECKBOX:
      return {
        ...state,
        submitedHardTissueTools: addHardTools(state.submitedHardTissueTools, action.data)

      };
    case examTypes.CLEARHISTORYET:
      return {
        ...state,
        selectedPerodentalTools: {},
        submit_perio_tools: false,
        submitedHardTissueTools: {},
        submit_hard_tools: false,
        cariesSelected: [],
        restorationsSelected: [],
        plaqueValue: '',
        bleedingValue: '',
        newcarries:[],
        newresto:[]
      };

    default:
      return state;
  }
}
export default ExaminationReducer;