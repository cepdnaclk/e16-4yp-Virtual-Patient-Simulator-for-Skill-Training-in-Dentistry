import {caseTypes} from '../../Reducers/types';

export const CaseActions = {
    setSelectedCase,
    setAllCases,
    clearhistory
};

function  setSelectedCase(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: caseTypes.SETCASE,data}
    }

}

function  setAllCases(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: caseTypes.SETALLCASES,data}
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
        return {type: caseTypes.CLEARHISTORYCT}
    }

}

