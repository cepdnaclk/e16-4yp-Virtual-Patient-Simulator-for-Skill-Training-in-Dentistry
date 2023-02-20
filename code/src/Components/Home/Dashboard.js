import React, { useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux";
//import { firebaseConnect } from "react-redux-firebase";
import { compose } from 'redux'
import Header1 from "../Headers/Header1"
import HistoryTakingQ from './HistoryTakingQ'
import {createTest} from '../../Actions/historyTakingQ/historyTakingActions'

export default function Dashboard(){
    console.log("at comp")

    const dispatch =useDispatch()
//     useEffect(() => {
//      dispatch(createTest({"messsage":"hello Test"}))
//    }, []);
    return(
        <div>
            <Header1/>
            <HistoryTakingQ/>
        </div>
    )
}