import React, { useEffect } from 'react'
import { useSelector,useDispatch} from "react-redux";
import { createTest } from '../../Actions/historyTakingQ/historyTakingActions'
import {logout, UserLogoutActions} from '../../Actions/User/UserLogoutActions'
import { useNavigate, Link} from 'react-router-dom';
import './nav.css'
import { ExaminationActions } from '../../Actions/Examination/ExaminationActions';
import { CaseActions } from '../../Actions/Case/CaseActions';
import { DiagnosisActions } from '../../Actions/Diagnosis/DiagnosisActions';
import { InvestigationActions } from '../../Actions/Investigation/InvestigationActions';
import { ScoreActions } from '../../Actions/Score/ScoreActions';
import { historyTakingActions } from '../../Actions/historyTakingQ/historyTakingActions';
import { TimeActions } from '../../Actions/Time/TimeActions';

function Navbar(){

   const {userInfomation} = useSelector((state) => state.user)
   const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
   const dispatch = useDispatch()
   const navigate = useNavigate();
  //  const dispatch =useDispatch()
  //  useEffect(() => {
  //   dispatch(createTest({"messsage":"hello Test"}))
  // }, []);
  const handleClick2=(e)=>{
    console.log("logout")
    dispatch(UserLogoutActions.logout());
    dispatch(ExaminationActions.clearhistory())
    dispatch(CaseActions.clearhistory())
    dispatch(DiagnosisActions.clearhistory())
    dispatch(historyTakingActions.clearhistory())
    dispatch(InvestigationActions.clearhistory())
    dispatch(ScoreActions.clearhistory())
    dispatch(TimeActions.clearhistory())
    navigate("/")
  }

    return(
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    {/*  */}
    <a class="navbar-brand" href="#">Hi {userInfomation.name}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
      <li class="nav-item">
        {selectedCaseDetails ? 
          <a class="nav-link" > Case Id : {selectedCaseDetails.caseId}
            {/* <span class="visually-hidden">(current)</span> */}
          </a> : null }
        </li>
      {/* <li class="nav-item">
          <Link class="nav-link" to="/caseSelect">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Previous Feedback
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="/adminSignIn">Admin</a> */}
          {/* <Link class="nav-link" to="/adminSignIn">Admin</Link>
        </li> */} 
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-sm-2" type="search" placeholder="Search"> */}
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" onClick={handleClick2}>Logout</button>
      </form>
    </div>
  </div>
</nav>
</div>
    )
}
export default Navbar;