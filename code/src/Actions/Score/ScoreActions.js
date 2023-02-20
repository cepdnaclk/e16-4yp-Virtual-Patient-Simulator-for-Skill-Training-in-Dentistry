import {scoreTypes} from '../../Reducers/types';

export const ScoreActions = {
    setDiagScore,
    setExamScore,
    setHisScore,
    // setInvestScore,
    setHardTissueScore,
    setPerodentalScreeningScore,
    setCriesScore,
    setRestorationScore,
    setPlaqueScore,
    setBleedingScore,
    setPlaqueToolScore,
    setBleedingToolScore,
    setRadioScore,
    clearhistory
};

function  setDiagScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.DIAG_SCORE,data}
    }

}

function  setHisScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.HIST_SCORE,data}
    }

}
function  setExamScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.EXAM_SCORE,data}
    }

}
// function  setInvestScore(data){
//     return async dispatch => {
//         try {
//             dispatch(success(data));
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     function success(data) {
//         return {type: scoreTypes.INVEST_SCORE,data}
//     }

// }
function  setPerodentalScreeningScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.PERIODENTAL_SCORE,data}
    }

}

function  setHardTissueScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.HARDTISSUE_SCORE,data}
    }

}
function  setCriesScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.CARIES_SCORE,data}
    }

}
function  setRestorationScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.RESTORATION_SCORE,data}
    }

}
function  setPlaqueScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.PLAQUE_SCORE,data}
    }

}
function  setBleedingScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.BLEEDING_SCORE,data}
    }

}
function  setPlaqueToolScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.PLAQUE_TOOl_SCORE,data}
    }

}
function  setBleedingToolScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.BLEEDING_TOOl_SCORE,data}
    }

}

function  setRadioScore(data){
    return async dispatch => {
        try {
            dispatch(success(data));
        } catch (error) {
            console.log(error)
        }
    };

    function success(data) {
        return {type: scoreTypes.RADIO_SCORE,data}
    }

}

function  clearhistory(){
    return async dispatch => {
        try {
            dispatch(success());
        } catch (error) {
            console.log(error)
        }
    };

    function success() {
        return {type: scoreTypes.CLEARHISTORYST}
    }

}


