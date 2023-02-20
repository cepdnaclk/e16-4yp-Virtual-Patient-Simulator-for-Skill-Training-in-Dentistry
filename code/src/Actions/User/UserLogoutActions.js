import {userTypes} from '../../Reducers/types';

export const UserLogoutActions = {
    logout,
};

function  logout(){
    return async dispatch => {
        try {
            dispatch(success());
        } catch (error) {
            console.log(error)
        }
    };

    function success() {
        return {type: userTypes.SIGN_OUT}
    }

}



