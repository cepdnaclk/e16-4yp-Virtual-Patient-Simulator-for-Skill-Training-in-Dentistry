import {diagnosisTypes} from '../../Reducers/types';

export const DiagnosisActions = {
    setCorrectDiagnosisQ,
    setSelectedAnsForDQ,
    setDiagnosisAllQ,
    setWrongDiagnosisQ,
    setDiagnosisSubmit,
    removeCorrectDiagnosisQ,
    removeWrongDiagnosisQ,
    clearhistory
};

function  setDiagnosisAllQ(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SETDIAGNOSISQ,data}
    }

}

function setSelectedAnsForDQ(data){
    return async dispatch => {
        try {
            console.log('in diag actions')
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SELECTEDANSFORDQ,data}
    }
}

function setDiagnosisSubmit(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.ISSUBMITDIAGNOSIS,data}
    }
}


function  setCorrectDiagnosisQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SETCORRECTDIAGNOSISQ,data}
    }

}

function  setWrongDiagnosisQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.SETWRONGDIAGNOSISQ,data}
    }

}
function  removeWrongDiagnosisQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.WRONGREMOVE,data}
    }

}

function  removeCorrectDiagnosisQ(data){
    return async dispatch => {
        try {
            console.log(data)
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: diagnosisTypes.CORRECTREMOVE,data}
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
        return {type: diagnosisTypes.CLEARHISTORYDT}
    }

}


