import React, { useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';
import { useSelector, useDispatch } from 'react-redux';
import { ScoreActions } from '../../../Actions/Score/ScoreActions';
import { useNavigate, Link } from 'react-router-dom';
import DiagnosisFCard from './feedbacks/DiagnosisFCard';
import firebase from '../../../Config/Config'
import Table from 'react-bootstrap/Table';
import { historyTakingActions } from '../../../Actions/historyTakingQ/historyTakingActions';
import { CaseActions } from '../../../Actions/Case/CaseActions';
import { DiagnosisActions } from '../../../Actions/Diagnosis/DiagnosisActions';
import { ExaminationActions } from '../../../Actions/Examination/ExaminationActions';
import { InvestigationActions } from '../../../Actions/Investigation/InvestigationActions';
import {TimeActions} from '../../../Actions/Time/TimeActions';
import Navbar from '../../Navbar';
import './Feed.css';
import img3 from "../../../Images/invBck2.webp"
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function FeedbackEval() {

  const dispatch = useDispatch()

  //Diagnosis
  //100 × (Total score of selected correct diagnosis)/(Total score of diagnosis)
  const { wrongDiagnosisQ } = useSelector((state) => state.diagnosisQ)
  const { correctDiagnosisQ } = useSelector((state) => state.diagnosisQ)
  const { diagScore } = useSelector((state) => state.score) //01.Systematic thinking
  const { selectedCaseDetails } = useSelector((state) => state.caseSelected)
  const { userInfomation } = useSelector((state) => state.user)

  //History Taking
  // 100 × (total number of selected correct history
  //   questions, examinations, diagnoses)/ (total
  //   number of correct history questions,
  //   examinations, diagnoses)
  const { selectedQdata } = useSelector((state) => state.historyQ)
  const { allHistoryTakingQ } = useSelector((state) => state.historyQ)
  const { sectionOrder } = useSelector((state) => state.historyQ)
  const [ScoreHistory, setScoreHistory] = useState(0)
  const [newStudentScore, setNewStudentScore] = useState(0)
  const [duration, setTimeDuration] = useState('')

  const { periodentalScreeningScore } = useSelector((state) => state.score)
  const { hardTissueScore } = useSelector((state) => state.score)
  const { cariesScore } = useSelector((state) => state.score)
  const { restorationScore } = useSelector((state) => state.score)
  const { plaqueScore } = useSelector((state) => state.score)
  const { bleedingScore } = useSelector((state) => state.score)
  const { plaqueToolScore } = useSelector((state) => state.score)
  const { bleedingToolScore } = useSelector((state) => state.score)
  const { radioScore } = useSelector((state) => state.score)
  const { start_time } = useSelector((state) => state.time)
  const { countCorrectHistoryTaking } = useSelector((state) => state.historyQ)
  const { radioSelections } = useSelector((state) => state.investigation)

  const { submitedHardTissueTools } = useSelector((state) => state.examination)

  const [correctHistoryQ, setcorrectHistoryQ] = useState([])
  const [wrongHistoryQ, setwrongHistoryQ] = useState([])

  const [perioselectedTool, setperioselectedTool] = useState([])
  const [hardselectedTool, sethardselectedTool] = useState([])
  const [perioselectedToolAns, setperioselectedToolAns] = useState([])
  const [hardselectedToolAns, sethardselectedToolAns] = useState([])

  const [radio, setradio] = useState([])
  const [radioAns, setradioAns] = useState([])



  useEffect(() => {
    //calculateHistoryScore()
    addData()
    setperioselectedTool(setTools(selectedPerodentalTools))
    sethardselectedTool(setTools(submitedHardTissueTools))
    setperioselectedToolAns(setAnsTools(selectedCaseDetails.intraOralTools))
    sethardselectedToolAns(setAnsTools(selectedCaseDetails.hardTissueTools))
    console.log(radioSelections)
    setradio(setRadioArray(getRadioSelections2(radioSelections)))
    setradioAns(setRadioArray(selectedCaseDetails.radiograph_type))
    // getCorrectHistoryQ()


  }, []);

  const getCorrectHistoryQ = () => {
    for (let i = 0; i < selectedQdata.length; i++) {
      if (selectedQdata[i].correctness) {
        setcorrectHistoryQ(correctHistoryQ.concat(selectedQdata[i].q));
      }
      else {
        setwrongHistoryQ(wrongHistoryQ.concat(selectedQdata[i].q));
      }
    }
  }



  const setDuration = () => {
    let currentTime = new Date()
    let utc1 = start_time.getTime()
    let utc2 = currentTime.getTime()
    let ts = (utc2 - utc1) / 1000;
    console.log(currentTime)
    var d = Math.floor(ts / (3600 * 24));
    var h = Math.floor(ts % (3600 * 24) / 3600);
    var m = Math.floor(ts % 3600 / 60);
    var s = Math.floor(ts % 60);
    let duration1 = ''
    if (d > 0) {
      duration1 = d + "days and " + h + ":" + m + ":" + s + "hrs"
    }
    else {
      duration1 = h + ":" + m + ":" + s + "hrs"
    }
    console.log(duration1)
    setTimeDuration(duration1)
    return duration1

  }

  const calculateHistoryScore = () => {
    setScoreHistory(histScore)
    //check related or not
    let correctCount = 0
    let TotalScore = 0
    let inCorrectCount = 0
    const weightForHis = 4
    let arra1 = []
    let arra2 = []
    for (let i = 0; i < selectedQdata.length; i++) {
      if (selectedQdata[i].correctness) {
        correctCount++
        arra1.push(selectedQdata[i].q)
      }
      else {
        inCorrectCount++
        arra2.push(selectedQdata[i].q)
      }
    }
    setcorrectHistoryQ(arra1)
    setwrongHistoryQ(arra2)
    console.log(correctHistoryQ)
    console.log(correctCount, "counts", inCorrectCount, "len", countCorrectHistoryTaking.length)
    if (correctCount > inCorrectCount) {
      correctCount = correctCount - inCorrectCount
      TotalScore = 100 * (weightForHis / 10) * (correctCount / countCorrectHistoryTaking) * 0.75
    }
    else if (correctCount <= inCorrectCount) {
      TotalScore = 0
    }

    setScoreHistory(TotalScore)
    dispatch(ScoreActions.setHisScore(TotalScore))
    let orderScore = 0
    if (sectionOrder[0] == 'complaint') {
      orderScore = 100 * 0.25 * (weightForHis / 10) * (2.5 / 10)
      console.log(orderScore)
    }
    else {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (2 / 10)
    }
    if (sectionOrder[1] == 'medicalH') {
      orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (2.5 / 10)
      console.log(orderScore)
    }
    else {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (2 / 10)
    }
    // if (sectionOrder.includes('habits')) {
    //   orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    // }
    // if (sectionOrder.includes('dhistory')) {
    //   orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    // }
    // if (sectionOrder.includes('plaque')) {
    //   orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    // }
    // if (sectionOrder.includes('pretreate')) {
    //   orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    // }
    // if (sectionOrder.includes('shistory')) {
    //   orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    // }
    orderScore = orderScore + 100 * 0.25 * (weightForHis / 10) * (5 / 10)
    let isWrongComplaint = false
    let isWrongMedicalH = false
    for (let i = 2; i < sectionOrder.length; i++) {
      if (sectionOrder[i] == 'complaint') {
        isWrongComplaint = true
      }
      if (sectionOrder[i] == 'medicalH') {
        isWrongMedicalH = true
      }
    }
    if (isWrongComplaint) {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    if (isWrongMedicalH) {
      orderScore = orderScore - 100 * 0.25 * (weightForHis / 10) * (1 / 10)
    }
    console.log(orderScore, ':', TotalScore)
    let historyScore = 0
    if (orderScore > 0) {
      dispatch(ScoreActions.setHisScore(TotalScore + orderScore))
      historyScore = TotalScore + orderScore
    }


    const StudentScore = historyScore + diagScore + periodentalScreeningScore + hardTissueScore + cariesScore + restorationScore + plaqueScore + bleedingScore + plaqueToolScore + bleedingToolScore + radioScore
    const Systematic_thinking = StudentScore - diagScore
    const expansion_of_knowledge = diagScore

    setNewStudentScore(StudentScore)
    return historyScore
    //addData()
  }

  const { selectedPerodentalTools } = useSelector((state) => state.examination)
  const { cariesSelected } = useSelector((state) => state.examination)
  const { restorationsSelected } = useSelector((state) => state.examination)
  const { plaqueValue } = useSelector((state) => state.examination)
  const { bleedingValue } = useSelector((state) => state.examination)
  const { newcarries } = useSelector((state) => state.examination)
  const { newresto } = useSelector((state) => state.examination)
  
  console.log(radioSelections)




  const getRadioSelections = () => {
    let array = []
    for (let key in radioSelections) {
      console.log(key, radioSelections[key])
      if (radioSelections[key]) {
        array.push(key)
      }
    }
    console.log(array)
    return array
  }

  const getRadioSelections2 = (rad) => {
    let array = []
    for (let key in rad) {
      console.log(key, rad[key])
      if (rad[key]) {
        array.push(key)
      }
    }
    console.log(array)
    return array
  }

  const setTools = (array2) => {
    let array = []
    for (let key in array2) {
      console.log(key, array2[key])
      if (array2[key]) {
        if (key == 'intra_ToolA') {
          array.push('Tool_1 (Naber’s probe)')
        }
        if (key == 'intra_ToolB') {
          array.push('Tool_2 (Periodontal probe)')
        }
        if (key == 'intra_ToolC') {
          array.push('Tool_3 (Sharp probe)')
        }

        if (key == 'intra_ToolD') {
          array.push('Tool_4 (Dental explorer)')
        }
        if (key == 'intra_ToolE') {
          array.push('Tool_5 (WHO/CPI probe)')
        }
        if (key == 'intra_ToolF') {
          array.push('Tool_6 (Mouth mirror)')
        }

      }
    }
    return array
  }

  const setAnsTools = (array2) => {
    let array = []
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] == 'intra_ToolA') {
        array.push('Tool_1 (Naber’s probe)')
      }
      if (array2[i] == 'intra_ToolB') {
        array.push('Tool_2 (Periodontal probe)')
      }
      if (array2[i] == 'intra_ToolC') {
        array.push('Tool_3 (Sharp probe)')
      }

      if (array2[i] == 'intra_ToolD') {
        array.push('Tool_4 (Dental explorer)')
      }
      if (array2[i] == 'intra_ToolE') {
        array.push('Tool_5 (WHO/CPI probe)')
      }
      if (array2[i] == 'intra_ToolF') {
        array.push('Tool_6 (Mouth mirror)')
      }

    }
    return array
  }

  const setRadioArray = (array2) => {
    let array = []
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] == 'opg') {
        array.push('DPT')
      }
      if (array2[i] == 'iopg') {
        array.push('IOPA')
      }
      if (array2[i] == 'bitewing') {
        array.push('Bitewing')
      }

      if (array2[i] == 'other') {
        array.push('Other')
      }
      if (array2[i] == 'cbct') {
        array.push('CBCT')
      }

    }
    return array
  }

  const handleclickExit =()=>{
    dispatch(ExaminationActions.clearhistory())
    dispatch(CaseActions.clearhistory())
    dispatch(DiagnosisActions.clearhistory())
    dispatch(historyTakingActions.clearhistory())
    dispatch(InvestigationActions.clearhistory())
    dispatch(ScoreActions.clearhistory())
    dispatch(TimeActions.clearhistory())
    navigate('/caseSelect');
  }


  const { selectedAnsForDiagnosisQ } = useSelector((state) => state.diagnosisQ)
  const { histScore } = useSelector((state) => state.score)

  const addData = async () => {
    var historyScore = calculateHistoryScore()
    var path = 'StudentsRecord' + selectedCaseDetails.caseId
    var tutorialsRef = firebase.firestore().collection(path);
    console.log(cariesSelected, ":",restorationsSelected)
    tutorialsRef.add({
      id: userInfomation.email,
      allHistoryTakingQ: selectedQdata,
      sectionOrder: sectionOrder,
      historyQMarks: historyScore,
      selectedPerodentalTools: selectedPerodentalTools,
      bleedingValue: bleedingValue,
      cariesSelected: newcarries,
      restorationsSelected: newresto,

      plaqueValue: plaqueValue,
      radioSelections: getRadioSelections(),
      periodentalScreeningScore: periodentalScreeningScore,
      hardTissueScore: hardTissueScore,
      cariesScore: cariesScore,
      restorationScore: restorationScore,

      plaqueScore: plaqueScore,
      bleedingScore: bleedingScore,
      plaqueToolScore: plaqueToolScore,
      bleedingToolScore: bleedingToolScore,

      radioScore: radioScore,
      diagScore: diagScore,
      selectedAnsForDiagnosisQ: selectedAnsForDiagnosisQ,
      //selectedAnsForDiagnosis:'hello',
      duration: setDuration()
    })
      .then(function (docRef) {
        console.log("Tutorial created with ID: ", docRef.id);
      })
  }

  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/diagnosis');
  };

  return (
    <div className ="app" style={{
      backgroundImage: `url(${img3})`,
      height:'400vh',
      marginTop:'0px',
      fontSize:'20px',
      backgroundSize: 'cover',
      }}>
        <div className='navText'>
          <Navbar/>
        </div>
        <div className='backbtn'>
          <button className="back" size="medium" onClick={handleClick1}>  Back </button>
        </div>
        <div className='fdtopic1'>Feedback and Evaluation</div>
        <div className='fdcard'>
          <Card sx={{ maxWidth: 1200, maxHeight: 3000 }}>
            <div>
              <Grid container>
                <Grid Item xs={4}><div className='fdmain'>Case Id </div></Grid>
                <Grid Item xs={8}>:{selectedCaseDetails.caseId}</Grid>
              </Grid>
            </div>
            <div>
              <Grid container>
                <Grid Item xs={4}><div className='fdmain'>Case Description: </div></Grid>
                <Grid Item xs={8}>:{selectedCaseDetails.description}</Grid>
              </Grid>
            </div>
            <div>
              <Grid container>
                <Grid Item xs={4}><div className='fdmain'>Your Score :  </div></Grid>
                <Grid Item xs={8}>:{Math.round(newStudentScore)}/100.0</Grid>
              </Grid>
            </div>
            <div>
              <Grid container>
                <Grid Item xs={4}><div className='fdmain'>Your Systematic thinking Score :  </div></Grid>
                <Grid Item xs={8}>:{Math.round(newStudentScore - diagScore)}/70.0</Grid>
              </Grid>
            </div>
            <div>
              <Grid container>
                <Grid Item xs={4}><div className='fdmain'>Score based on expansion of knowledge  </div></Grid>
                <Grid Item xs={8}>:{Math.round(diagScore)}/30.0</Grid>
              </Grid>
            </div>
            <div>
              <Grid container>
                <Grid Item xs={4}><div className='fdmain'>Your Spent time :  </div></Grid>
                <Grid Item xs={8}>:{duration}</Grid>
              </Grid>
            </div>
            <div className='fdtopic2'>History Taking</div>
            <div>
              <Grid container>
                <Grid Item xs={3}><div className='fdmain'>Score:  </div></Grid>
                <Grid Item xs={9}>:{Math.round(histScore)}/40.0</Grid>
              </Grid>
            </div>
            <div className='fdtable2'>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Correct Selections</th>
                    <th>Wrong Questions. Can you identify why they are wrong ??</th>
                  </tr>
                  <tr>
                    <td>
                      {correctHistoryQ ? correctHistoryQ.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {wrongHistoryQ ? wrongHistoryQ.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='fdtopic2'>Examination and Investigation</div>
            <div>
              <Grid container>
                <Grid Item xs={3}><div className='fdmain'>Score:  </div></Grid>
                <Grid Item xs={9}>:{Math.round(newStudentScore - diagScore-histScore)}/30.0</Grid>
              </Grid>
            </div>
            <div className='fdtopic2'>Tools need for Periodontal screening/BPE</div>
            <div className='fdtable1'>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Your Selections</th>
                    <th>Correct Answers</th>
                  </tr>
                  <tr>
                    <td>
                      {perioselectedTool ? perioselectedTool.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {perioselectedToolAns? perioselectedToolAns.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='fdtopic2'>Tools need for the dental assessment</div>
            <div className='fdtable1'>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Your Selections</th>
                    <th>Correct Answers</th>
                  </tr>
                  <tr>
                    <td>
                      {hardselectedTool ? hardselectedTool.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {hardselectedToolAns? hardselectedToolAns.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='fdtopic2'>Plaque Score</div>
            <div className='fdtable1'>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Your answer</th>
                    <th>Correct Answers</th>
                  </tr>
                  <tr>
                    <td>
                      {plaqueValue}
                    </td>
                    <td>
                    {selectedCaseDetails.Hard_plaque_score}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='fdtopic2'>Bleeding Score</div>
            <div className='fdtable1'>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Your answer</th>
                    <th>Correct Answers</th>
                  </tr>
                  <tr>
                    <td>
                      {bleedingValue}
                    </td>
                    <td>
                    {selectedCaseDetails.Hard_bleeding_score}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='fdtopic2'>Radiographs</div>
            <div className='fdtable1'>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Your selections</th>
                    <th>Correct selections</th>
                  </tr>
                  <tr>
                  <td>
                      {radio ? radio.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {radioAns? radioAns.map(que =>
                        <div>
                          {que}
                        </div>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className='fdtopic2'>Diagnosis</div>
            <div>
              <Grid container>
                <Grid Item xs={3}><div className='fdmain'>Diagnosis score :  </div></Grid>
                <Grid Item xs={9}>:{Math.round(diagScore)}/30.0</Grid>
              </Grid>
            </div>

{selectedAnsForDiagnosisQ ? selectedAnsForDiagnosisQ.map(que =>
                <div>
                  <DiagnosisFCard oneQuestion={que}/>
                </div>
              ) : null}
              </Card>
</div>
<div className='fdsubmit2'>
<button onClick={handleclickExit} type="button" class="btn btn-primary btn-lg" fdprocessedid="6whgsi">Exit and back to Home</button>
</div>
    </div>
  );
}

export default FeedbackEval;
