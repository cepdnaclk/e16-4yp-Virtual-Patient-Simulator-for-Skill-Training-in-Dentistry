import {DentalSheetTypes} from '../types'; 
  const initialState = {
    restorationMark:[]
  };

  const  DentalSheetResReducer = (state = initialState, action)=> {
    switch (action.type) {
        case DentalSheetTypes.RESTORATION:
          return {
            restorationMark : action.data
            
          };
      
      
      default:
        return state;
    }
  }
export default  DentalSheetResReducer;