import {DentalSheetTypes} from '../types'; 
  const initialState = {
    cariesMark:[],
  };

  const  DentalSheetcariesReducer = (state = initialState, action)=> {
    switch (action.type) {
        case DentalSheetTypes.CARIES:
          return {
            cariesMark : action.data
            
          };
      
      default:
        return state;
    }
  }
export default  DentalSheetcariesReducer;