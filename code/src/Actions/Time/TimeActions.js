import {timeTypes} from '../../Reducers/types';

export const TimeActions = {
    setStartTime,
    clearhistory
};

function  setStartTime(){
    return async dispatch => {
        try {
            
            let data=new Date()
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: timeTypes.STARTTIME,data}
    }

}

function  clearhistory(){
    return async dispatch => {
        try {
            console.log()
            dispatch(success());
        } catch (error) {
            console.log(error)
        }
    };

    function success() {
        return {type: timeTypes.CLEARHISTORYTT}
    }

}





