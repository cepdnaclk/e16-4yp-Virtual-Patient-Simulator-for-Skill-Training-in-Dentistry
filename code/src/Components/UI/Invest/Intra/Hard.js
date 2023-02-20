import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green, red } from '@mui/material/colors';
import CariesDD from './CariesDD'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ExaminationActions } from '../../../../Actions/Examination/ExaminationActions';
import { useDispatch } from 'react-redux';
import Resto from './Resto';
import { ScoreActions } from '../../../../Actions/Score/ScoreActions';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
function Hard() {

  const { selectedCaseDetails } = useSelector((state) => state.caseSelected)
  const { isSubmitDiagnosis } = useSelector((state) => state.diagnosisQ)
  const dispatch = useDispatch()
  const [selectedCheckBox, setSelectedCheckBox] = useState({});
  const [toolsScore, setToolsScore] = useState(0);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const { submitedHardTissueTools } = useSelector((state) => state.examination)
  const { submit_hard_tools } = useSelector((state) => state.examination)
  const { cariesSelected } = useSelector((state) => state.examination)
  const { plaqueValue } = useSelector((state) => state.examination)
  const { bleedingValue } = useSelector((state) => state.examination)
  const [plaqueTool, setPlaqueTool]=useState('')
  const [bleedingTool, setBleedingTool]=useState('')


  useEffect(() => {
    setSelectedCheckBox(submitedHardTissueTools)
    if (submit_hard_tools) {
      document.getElementById("submitMsg").textContent = 'Submitted!!'
    }
  }, []);
  // setSelectedCheckBox(submitedHardTissueTools)

  const isCheckedA = (e) => {
    let val={'intra_ToolA':e.target.checked}
    dispatch(ExaminationActions.addToolToHardTools(val))
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolA: e.target.checked }));
  }
  const isCheckedB = (e) => {
    let val={'intra_ToolB':e.target.checked}
    dispatch(ExaminationActions.addToolToHardTools(val))
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolB: e.target.checked }));
  }
  const isCheckedC = (e) => {
    let val={'intra_ToolC':e.target.checked}
    dispatch(ExaminationActions.addToolToHardTools(val))
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolC: e.target.checked }));
  }
  const isCheckedD = (e) => {
    let val={'intra_ToolD':e.target.checked}
    dispatch(ExaminationActions.addToolToHardTools(val))
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolD: e.target.checked }));
  }
  const isCheckedE = (e) => {
    let val={'intra_ToolE':e.target.checked}
    dispatch(ExaminationActions.addToolToHardTools(val))
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolE: e.target.checked }));
  }
  const isCheckedF = (e) => {
    let val={'intra_ToolF':e.target.checked}
    dispatch(ExaminationActions.addToolToHardTools(val))
    setSelectedCheckBox(selectedCheckBox => ({ ...selectedCheckBox, intra_ToolF: e.target.checked }));
  }


  const setSubmit = () => {
      if(plaqueValue !='' && bleedingValue!='' && submitedHardTissueTools!='' && plaqueTool!='' && bleedingTool!=''){
        dispatch(ExaminationActions.setSubmithardTissueTools(true))
        if (!isSubmitDiagnosis) {
          document.getElementById("submitMsg").textContent = 'Submitted!!'
          document.getElementById("0").disabled = true
          document.getElementById("1").disabled = true
          document.getElementById("2").disabled = true
          document.getElementById("3").disabled = true
          document.getElementById("4").disabled = true
          document.getElementById("5").disabled = true
          const answers = selectedCaseDetails.hardTissueTools
          let count = 0
          let trueCount = 0
          let wrongCount = 0
          //Object.keys(selectedCheckBox)
          for (let i = 0; i < answers.length; i++) {
            for (let key in selectedCheckBox) {
              let compare = new String(key).valueOf() == new String(answers[i]).valueOf()
              console.log('compare', key, answers[i], !compare, selectedCheckBox[key], !answers.includes(key))
              if (compare && selectedCheckBox[key]) {
                count++
              }
              else if (!compare && selectedCheckBox[key] && !answers.includes(key)) {
                wrongCount++
              }
              // do something for each key in the object 
            }
          }

          console.log(wrongCount)
          wrongCount = wrongCount / 2
          const weightExam = 1.5
          let score = 100 * (weightExam / 10) * (1 / 3) * (count / answers.length)
          score = score - 100 * (weightExam / 10) * (1 / 3) * (wrongCount / (6 - answers.length))
          console.log(count, 'countw', wrongCount)
          if (score >= 0) {
            dispatch(ScoreActions.setHardTissueScore(score))
            setToolsScore(score)
            console.log(score)
          }
          dispatch(ExaminationActions.setHardTissueTools(selectedCheckBox))
        }
        else if (submit_hard_tools) {
          document.getElementById("submitMsg").textContent = 'Submitted!!'
        }
    }
    else{
      document.getElementById("submitMsg").textContent = 'Please fill all fields'
    }
  }

  const handleChange = (e) => {
    if(!isSubmitDiagnosis){
      setPlaqueTool(e.target.value)
      if (e.target.value == selectedCaseDetails.Hard_Plaque_tool) {
        dispatch(ScoreActions.setPlaqueToolScore(2.5))
      }
      else {
        dispatch(ScoreActions.setPlaqueToolScore(0))
      }
    }
  }

  const handleChange2 = (e) => {
  setBleedingTool(e.target.value)
    if(!isSubmitDiagnosis){
      if (e.target.value == selectedCaseDetails.Hard_bleeding_tool) {
        dispatch(ScoreActions.setBleedingToolScore(2.5))
      }
      else {
        dispatch(ScoreActions.setBleedingToolScore(0))
      }
    }
  }

  const getInputValue=(e)=>{
    console.log(e.target.value)
    if(!isSubmitDiagnosis){
      dispatch(ExaminationActions.setPlaqueValue(e.target.value))
      if (e.target.value == selectedCaseDetails.Hard_plaque_score) {
        dispatch(ScoreActions.setPlaqueScore(2.5))
      }
      else {
        dispatch(ScoreActions.setPlaqueScore(0))
      }
    }
    
  }
  const getInputValue2=(e)=>{
    if(!isSubmitDiagnosis){
      dispatch(ExaminationActions.setBleedingVal(e.target.value))
      if (e.target.value == selectedCaseDetails.Hard_bleeding_score) {
        dispatch(ScoreActions.setBleedingScore(2.5))
      }
      else {
        dispatch(ScoreActions.setBleedingScore(0))
      }
    }
    
  }


  return (
    <div>
         {isSubmitDiagnosis ?
    <div id='warningMsg' style={{fontSize:'15px'}}> 
    <div  class="alert alert-dismissible alert-danger">
      <strong>Allready submitted the answers.</strong> Can not modify Answers.
    </div>
  </div> : null }
<div className='pTopic'>Hard Tissue Assessment</div>
<div className='ptopic2'>Tool selection</div>
<div className='ptopic3'>1. Select the most suitable tools. Wrong selections will carry negative marks.</div>
<div className="tools">
  <Grid container spacing={5}>
    <Grid item xs={4}>
      <div className="toolc">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              alt="Tool1"
              image={selectedCaseDetails.intra_ToolA}
            />
            {/* <CardContent>
              <div className='case'>
                    Case {selectedCaseDetails.name}
                    </div>
                    <div className='casedes'>
                  {selectedCaseDetails.description}
              </div>
                  
            </CardContent> */}
          </CardActionArea>
        </Card>
      </div>
        <FormControlLabel
          label="Tool_1"
          control={
        <Checkbox
        value='intra_ToolA'
        defaultChecked={submitedHardTissueTools['intra_ToolA']}
        onChange={isCheckedA}
        id='0'
          {...label}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
          '&.Mui-checked': {
            color: red[700],color: red[600],
          },
        }}
        />}/>
      </Grid>
      <Grid item xs={4}>
      <div className="toolc">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              alt="Tool2"
              image={selectedCaseDetails.intra_ToolB}
            />
            {/* <CardContent>
              <div className='case'>
                    Case {selectedCaseDetails.name}
                    </div>
                    <div className='casedes'>
                  {selectedCaseDetails.description}
              </div>
                  
            </CardContent> */}
          </CardActionArea>
        </Card>
        </div>
        <FormControlLabel
          label="Tool_2"
          control={
        <Checkbox
        onChange={isCheckedB}
        value='intra_ToolB'
        defaultChecked={submitedHardTissueTools['intra_ToolB']}
        id='1'
          {...label}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
          '&.Mui-checked': {
            color: red[700],color: red[600],
          },
        }}
        />}/>
      </Grid>
      <Grid item xs={4}>
      <div className="toolc">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              alt="Tool3"
              image={selectedCaseDetails.intra_ToolC}
            />
            {/* <CardContent>
              <div className='case'>
                    Case {selectedCaseDetails.name}
                    </div>
                    <div className='casedes'>
                  {selectedCaseDetails.description}
              </div>
                  
            </CardContent> */}
          </CardActionArea>
        </Card>
        </div>
        <FormControlLabel
          label="Tool_3"
          control={
        <Checkbox
        onChange={isCheckedC}
        value='intra_ToolC'
        defaultChecked={submitedHardTissueTools['intra_ToolC']}
        id='2'
          {...label}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
          '&.Mui-checked': {
            color: red[700],color: red[600],
          },
        }}
        />}/>
      </Grid>
  </Grid>
  <div className="tool">
    <Grid container spacing={5}>
      <Grid item xs={4}>
      <div className="toolc">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              alt="Tool4"
              image={selectedCaseDetails.intra_ToolD}
            />
            {/* <CardContent>
              <div className='case'>
                    Case {selectedCaseDetails.name}
                    </div>
                    <div className='casedes'>
                  {selectedCaseDetails.description}
              </div>
                  
            </CardContent> */}
          </CardActionArea>
        </Card>
        </div>
        <FormControlLabel
          label="Tool_4"
          control={
        <Checkbox
        value='intra_ToolD'
        onChange={isCheckedD}
        defaultChecked={submitedHardTissueTools['intra_ToolD']}
        id='3'
          {...label}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
          '&.Mui-checked': {
            color: red[700],color: red[600],
          },
        }}
        />}/>
      </Grid>
      <Grid item xs={4}>
      <div className="toolc">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              alt="Tool5"
              image={selectedCaseDetails.intra_ToolE}
            />
            {/* <CardContent>
              <div className='case'>
                    Case {selectedCaseDetails.name}
                    </div>
                    <div className='casedes'>
                  {selectedCaseDetails.description}
              </div>
                  
            </CardContent> */}
          </CardActionArea>
        </Card>
        </div>
        <FormControlLabel
          label="Tool_5"
          control={
        <Checkbox
        value='intra_ToolE'
        onChange={isCheckedE}
        defaultChecked={submitedHardTissueTools['intra_ToolE']}
        id='4'
          {...label}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
          '&.Mui-checked': {
            color: red[700],color: red[600],
          },
        }}
        />}/>
      </Grid>
      <Grid item xs={4}>
      <div className="toolc">
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              alt="Tool6"
              image={selectedCaseDetails.intra_ToolF}
            />
            {/* <CardContent>
              <div className='case'>
                    Case {selectedCaseDetails.name}
                    </div>
                    <div className='casedes'>
                  {selectedCaseDetails.description}
              </div>
                  
            </CardContent> */}
          </CardActionArea>
        </Card>
        </div>
        <FormControlLabel
          label="Tool_6"
          control={
        <Checkbox
        onChange={isCheckedF}
        value='intra_ToolF'
        defaultChecked={submitedHardTissueTools['intra_ToolF']}
        id='5'
          {...label}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } ,color:"red",
          '&.Mui-checked': {
            color: red[700],color: red[600],
          },
        }}
        />}/>
      </Grid>
  </Grid>
<div>
</div>
</div>
</div>


      <div className='chart'>2. Dental Chart</div>
      <div className='ptopic3'>Select the tooth number and the related type according to your observations and add them using 'add' button. 
         To clear the list use "clear List" button</div>
      <Grid container spacing={3}>
      <Grid item xs={6}>
      <div className='chart'>Caries status</div>
      <div className='cariesQ'>Are there any Caries?</div>
      <div className='caries'><CariesDD /></div>
      <div className='cariesCard'>
        <Card sx={{ maxWidth: 500 }}>
        </Card></div></Grid>
        <Grid item xs={6}>
      <div className='chart'>Restorations</div>
      <div className='cariesQ'>Are there any Restorations?</div>
      <div className='caries'><Resto /></div>
      <div className='cariesCard'>
        <Card sx={{ maxWidth: 500 }}>
          
        </Card></div></Grid></Grid>
        <div>
          {selectedCaseDetails.caseId=='C001' ? 
          <div className='cariesQ' > Tooth 17 assessment  : Discolouration and caries on
          distal proximal surface </div> : null
        }
        </div>
          <div className='htopic1'>Plaque Chart</div>
          <div className='hsect1'><Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  alt="Tool6"
                  image={selectedCaseDetails.plaqueChart}
                />
                </CardActionArea>
              </Card>
            </div>
            <div className='htopic1'>Bleeding Chart</div>
            <div className='hsect1'><Card sx={{ maxWidth: 1000 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    alt="Tool6"
                    image={selectedCaseDetails.bleedingChart}
                  />
                </CardActionArea>
              </Card>
              </div>
              
      
      <div className='chart'>3. Answer the Questions</div>
      
          <div className='mainqs'> Select the correct tool to check plaque score &nbsp;
       
        
        <select className="dd1" label="Select Tool" onChange={handleChange} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">
          <option className="dd"></option>
          <option value='intra_ToolA' className="dd">Tool_1</option>
          <option value='intra_ToolB' className="dd">Tool_2</option>
          <option value='intra_ToolC' className="dd">Tool_3</option>
          <option value='intra_ToolD' className="dd">Tool_4</option>
          <option value='intra_ToolE' className="dd">Tool_5</option>
          <option value='intra_ToolF' className="dd">Tool_6</option>
        </select>
                 
        </div>
      <div className='mainqs'>What is the plaque score?</div>
      <div className='qs'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Your answer" variant="standard" onChange={getInputValue} value={plaqueValue} />
        </Box></div>
     
      <div className='mainqs'> Select the correct tool to check bleeding score &nbsp;
        <select className="dd1" label="Select Tool" onChange={handleChange2} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">

          <option className="dd"></option>
          <option value='intra_ToolA' className="dd">Tool_1</option>
          <option value='intra_ToolB' className="dd">Tool_2</option>
          <option value='intra_ToolC' className="dd">Tool_3</option>
          <option value='intra_ToolD' className="dd">Tool_4</option>
          <option value='intra_ToolE' className="dd">Tool_5</option>
          <option value='intra_ToolF' className="dd">Tool_6</option>

        </select>
      </div>
      <div className='mainqs'>What is the bleeding score?</div>
      <div className='qs'>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '20ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Your answer" variant="standard" onChange={getInputValue2} value={bleedingValue}/>
        </Box></div>
      
      {/* <div className='label1'>If you submit, you can no longer edit the selections</div> */}
      <div className='submit'>
        <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd" onClick={setSubmit}>submit</button>
      </div>
      <div className='submttd' id="submitMsg"></div>
    </div>
  );
}

export default Hard;
