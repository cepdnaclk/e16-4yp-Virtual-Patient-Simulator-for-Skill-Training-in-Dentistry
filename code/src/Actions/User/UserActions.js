import {userTypes} from '../../Reducers/types';

export const UserActions = {
    getCurrentUserDetails,
};

function  getCurrentUserDetails(data){
    return async dispatch => {
        try {
            console.log('at userActions',data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: userTypes.SIGN_IN_SUCCESS,data}
    }

}



