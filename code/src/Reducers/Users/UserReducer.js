
  import {userTypes} from '../types'; 
  const initialState = {
    userInfomation:{},
    isSignIn :false
  };

  const UserReducer = (state = initialState, action)=> {
    switch (action.type) {
      case userTypes.SIGN_IN_SUCCESS:
        return {
          ...state,
          isSignIn : true,
          userInfomation:action.data
          
        };
      
      case userTypes.SIGN_OUT:
        return {
          ...state,
          isSignIn : false,
          userInfomation : {}
          
        };
      
      default:
        return state;
    }
  }
   export default UserReducer;