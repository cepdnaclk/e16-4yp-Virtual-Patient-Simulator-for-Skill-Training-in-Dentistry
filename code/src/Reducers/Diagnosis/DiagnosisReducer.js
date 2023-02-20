import { diagnosisTypes } from '../types';
const initialState = {
  allDignosisQ: [],
  correctDiagnosisQ: [],
  wrongDiagnosisQ: [],
  selectedAnsForDiagnosisQ: [],
  isSubmitDiagnosis: false
};


const setCorrectDiagnosisQ = (array1, index) => {

  let ind = parseInt(index[0])
  if (index !== -1) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].q == index[1]) {

        var qarray = array1[i].studentCorrectAnswers
        var newArray = []
        for (let r = 0; r < ind; r++) {
          newArray[r] = qarray[r]
        }

        for (let j = ind; j < (qarray.length - 1); j++) {
          newArray[j] = qarray[j + 1];
        }

        array1[i].studentCorrectAnswers = newArray
        return array1;
      }

    }
  }
  else {
    return array1
  }
  // if (array1.length != 0) {
  //   for (let i = 0; i < array1.length; i++) {
  //     console.log(array1[i].id, item.id)
  //     if (array1[i].id == item.id) {
  //       return array1;
  //     }
  //   }
  //   return array1.concat(item)
  // }
  // else {
  //   return array1.concat(item)
  // }

}

const setWrongDiagnosisQ = (array1, index) => {


  let ind = parseInt(index[0])
  if (index !== -1) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].q == index[1]) {
        console.log(ind)
        var qarray = array1[i].studentWrongAnswers
        var newArray = []
        for (let r = 0; r < ind; r++) {
          newArray[r] = qarray[r]
        }

        for (let j = ind; j < (qarray.length - 1); j++) {

          newArray[j] = qarray[j + 1];
        }

        array1[i].studentWrongAnswers = newArray
        return array1;
      }

    }
  }
  else {
    return array1
  }

  // console.log(array2, initialState.correctDiagnosisQ, item)
  // if (array2.length != 0) {
  //   for (let i = 0; i < array2.length; i++) {
  //     console.log(array2[i].id, item.id)
  //     if (array2[i].id == item.id) {
  //       return array2;
  //     }
  //   }
  //   return array2.concat(item)
  // }
  // else {
  //   return array2.concat(item)
  // }

}

// const setSelectedAnsForDiagnosis =(array3,item)=>{
//   if(array3.length !=0){
//       for(let i=0;i<array3.length;i++){
//           console.log(array3[i].id,item.id)
//           if(array3[i].id==item.id){
//               array3[i].studentAnswer=item.studentAnswer
//               array3[i].correctness=item.correctness
//               return array3;
//           }
//       }
//       return array3.concat(item)
//   }
//   else{
//       return array3.concat(item)
//   }
// }
const setSelectedAnsForDiagnosis = (array3, item) => {
  if (array3.length != 0) {
    for (let i = 0; i < array3.length; i++) {

      if (array3[i].id == item.id) {
        array3[i].studentCorrectAnswers = item.studentCorrectAnswers
        array3[i].studentWrongAnswers = item.studentWrongAnswers
        return array3;
      }
    }
    return array3.concat(item)
  }
  else {
    return array3.concat(item)
  }
}
const removeCorrectDiagnosisQ = (array3, index) => {
  console.log('prev:', array3)
  if (index !== -1) {
    let newArray = array3.splice(index, 1);
    console.log('new:', newArray)
    return newArray;
  }
  else {
    return array3
  }
}
const removeWrongDiagnosisQ = (array3, index) => {
  console.log('prev:', array3)
  if (index !== -1) {
    let newArray = array3.splice(index, 1);
    console.log('new:', newArray)
    return newArray;
  }
  else {
    return array3
  }
}

const DiagnosisReducer = (state = initialState, action) => {
  switch (action.type) {
    case diagnosisTypes.SETDIAGNOSISQ:
      return {
        ...state,
        allDignosisQ: action.data

      };
    case diagnosisTypes.SETCORRECTDIAGNOSISQ:
      return {
        ...state,
        selectedAnsForDiagnosisQ: setCorrectDiagnosisQ(state.selectedAnsForDiagnosisQ, action.data)

      };
    case diagnosisTypes.SETWRONGDIAGNOSISQ:
      return {
        ...state,
        selectedAnsForDiagnosisQ: setWrongDiagnosisQ(state.selectedAnsForDiagnosisQ, action.data)

      };
    case diagnosisTypes.SELECTEDANSFORDQ:
      return {
        ...state,
        selectedAnsForDiagnosisQ: setSelectedAnsForDiagnosis(state.selectedAnsForDiagnosisQ, action.data)

      };
    case diagnosisTypes.ISSUBMITDIAGNOSIS:
      return {
        ...state,
        isSubmitDiagnosis: true

      };
    case diagnosisTypes.CORRECTREMOVE:
      return {
        ...state,
        correctDiagnosisQ: removeCorrectDiagnosisQ(state.correctDiagnosisQ, action.data)

      };
    case diagnosisTypes.WRONGREMOVE:
      return {
        ...state,
        wrongDiagnosisQ: removeWrongDiagnosisQ(state.wrongDiagnosisQ, action.data)

      };
    case diagnosisTypes.CLEARHISTORYDT:
      return {
        ...state,
        correctDiagnosisQ: [],
        wrongDiagnosisQ: [],
        selectedAnsForDiagnosisQ: [],
        isSubmitDiagnosis: false

      };


    default:
      return state;
  }
}
export default DiagnosisReducer;

