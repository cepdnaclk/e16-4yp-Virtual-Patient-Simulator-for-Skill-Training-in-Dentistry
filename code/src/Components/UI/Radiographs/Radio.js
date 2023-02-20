import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState, Fragment } from 'react';
import './Case.css'
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import IOPG from "./IOPG"
import Bitewing from "./Bitewing"
import OPG from "./OPG"
import Other from "./Other"
import img3 from "../../../Images/radioBck.jpg"
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import Navbar from '../../Navbar';
import CBCT from './CBCT';
import img2 from "../../../Images/invBck2.webp";
import { InvestigationActions } from '../../../Actions/Investigation/InvestigationActions';
import { ScoreActions } from '../../../Actions/Score/ScoreActions';
import { useDispatch } from 'react-redux';

const Radio = () => {
  const { userInfomation } = useSelector((state) => state.user)
  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  const {radioSelections}= useSelector((state) => state.investigation)
  const {isSubmitDiagnosis} = useSelector((state) => state.diagnosisQ)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClick = () => {
    if(!isSubmitDiagnosis){
      const answers = selectedCaseDetails.radiograph_type
      let count=0
      let wrongCount=0
      //Object.keys(selectedCheckBox)
      for(let i=0;i<answers.length;i++){
        for (let key in investSelections) {
          let compare=new String(key).valueOf() == new String(answers[i]).valueOf()
          console.log('compare',key,answers[i],!compare,investSelections[key],!answers.includes(key))
            if(compare && investSelections[key]){
              count++
            }
            else if (!compare && investSelections[key] && !answers.includes(key)){
              wrongCount++
            }
          // do something for each key in the object 
        }
      }
      
      console.log(wrongCount)
      wrongCount=wrongCount/2
      const weightExam=1.5
      let score = 100*(weightExam/10)*(1/3)*(count/answers.length)
      score=score-100*(weightExam/10)*(1/3)*(wrongCount/(6-answers.length))
      console.log(count,'countw',wrongCount)
      if(score>=0){
        dispatch(ScoreActions.setRadioScore(score))
      }
      dispatch(InvestigationActions.setRadioSelection(investSelections))
    }
    navigate('/page2');
  };
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    ground: false
  });
  const [exam_inv, setexam_inv] = useState({
    // iopg: false,
    // opg: false, //dpt
    // bitewing: false,
    // other: false
  });
  const [investSelections, setSelections] = useState({
    // iopg: false,
    // opg: false, //dpt
    // bitewing: false,
    // other: false
  });
  console.log(exam_inv)
  
  useEffect(() => {
    
    setSelections({
        iopg: radioSelections.iopg,
        opg: radioSelections.opg, //dpt
        bitewing: radioSelections.bitewing,
        other: radioSelections.other,
        cbct:radioSelections.cbct
      })
    
  }, []);
  console.log(investSelections)
  

  const handleClick2 = () => {
    if(!isSubmitDiagnosis){
      const answers = selectedCaseDetails.radiograph_type
      let count=0
      let wrongCount=0
      //Object.keys(selectedCheckBox)
      for(let i=0;i<answers.length;i++){
        for (let key in investSelections) {
          let compare=new String(key).valueOf() == new String(answers[i]).valueOf()
          console.log('compare',key,answers[i],!compare,investSelections[key],!answers.includes(key))
            if(compare && investSelections[key]){
              count++
            }
            else if (!compare && investSelections[key] && !answers.includes(key)){
              wrongCount++
            }
          // do something for each key in the object 
        }
      }
      
      console.log(wrongCount)
      wrongCount=wrongCount/2
      const weightExam=1.5
      let score = 100*(weightExam/10)*(1/3)*(count/answers.length)
      score=score-100*(weightExam/10)*(1/3)*(wrongCount/(6-answers.length))
      console.log(count,'countw',wrongCount)
      if(score>=0){
        dispatch(ScoreActions.setRadioScore(score))
      }
      console.log(investSelections)
      dispatch(InvestigationActions.setRadioSelection(investSelections))
    }
      navigate('/diagnosis');
  
  }

  const onClickHandler2 = () => {
    console.log("button clicked")
    setexam_inv({
      iopg: false,
      opg: true,
      bitewing: false,
      other: false
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = 'rgb(95,129,182)';
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = '#002966';
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor = '#002966';
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor = '#002966';
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor = '#002966';
    setSelections(
      { // with a new array
          ...investSelections, // that contains all the old items
          opg : true // and one new item at the end
      }
    );
    
    

  };


  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
      iopg: true,
      opg: false,
      bitewing: false,
      other: false,
      cbct: false
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = "#002966";
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = 'rgb(95,129,182)';
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor = "#002966";
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor = "#002966";
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor = "#002966";
    setSelections(
      { // with a new array
          ...investSelections, // that contains all the old items
          iopg : true // and one new item at the end
      }
    );

    
  };
  const onClickHandler5 = () => {
    setexam_inv({
      iopg: false,
      opg: false,
      bitewing: true,
      other: false,
      cbct: false
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = "#002966";
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = "#002966";
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor = 'rgb(95,129,182)';
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor = "#002966";
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor = "#002966";
    setSelections(
      { // with a new array
          ...investSelections, // that contains all the old items
          bitewing : true // and one new item at the end
      }
    );
  
  };

  const onClickHandler6 = () => {
    console.log("button clicked")
    setexam_inv({
      iopg: false,
      opg: false,
      bitewing: false,
      other: true,
      cbct: false
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = "#002966";
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = "#002966";
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor = "#002966";
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor = 'rgb(95,129,182)';
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor = "#002966";
    setSelections(
      { // with a new array
          ...investSelections, // that contains all the old items
          other : true // and one new item at the end
      }
    ); 
    
  };
  const onClickHandler7 = () => {
    console.log("button clicked")
    setexam_inv({
      iopg: false,
      opg: false,
      bitewing: false,
      other: false,
      cbct: true
    })
    const btn1 = document.getElementById('OPG');
    btn1.style.backgroundColor = "#002966";
    const btn2 = document.getElementById('IOPA');
    btn2.style.backgroundColor = "#002966";
    const btn3 = document.getElementById('Bitewing');
    btn3.style.backgroundColor = "#002966";
    const btn4 = document.getElementById('Other');
    btn4.style.backgroundColor = "#002966";
    const btn5 = document.getElementById('cbct');
    btn5.style.backgroundColor = 'rgb(95,129,182)';
    setSelections(
      { // with a new array
          ...investSelections, // that contains all the old items
          cbct : true // and one new item at the end
      }
    );
    
  };

  const onClickHandler = (order) => {
    const resetImages = {
      first: false,
      second: false,
      ground: false,
    };
    setImageClicked({
      ...resetImages,
      [order]: true
    });
  };

  


  const sentencestyle = {
    color: 'black',
    lineHeight: 7,
    // padding: '0.5em',
    textAlign: "center",

  }
  const sentencestyle2 = {
    color: '#188184',
    lineHeight: 2,
    // padding: '0.5em',
    textAlign: "center",

  }
  return (
    <div className="app" style={{
      backgroundImage: `url(${img2})`,
      height: '200vh',
      marginTop: '0px',
      fontSize: '50px',
      backgroundSize: 'cover',
    }}>
      <div className='navText'>
        <Navbar />
      </div>

      <div>
        <Grid container spacing={20}>
          <Grid item xs={4}>
            <div className='backbtn'>
              <button className="back" size="medium" onClick={handleClick}>Back</button>
            </div>

          </Grid>
          <Grid item xs={4}>
            <div className="exmbtn">
              <button className="back" size="medium" onClick={handleClick2}>Next</button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='radtopic'>Radiographs</div>
      <div className='radmainqs'> Select the correct tests you need. View them. Wrong selections will carry negative marks. </div>
      {isSubmitDiagnosis ?
    <div id='warningMsg' style={{fontSize:'15px'}}>
        <div  class="alert alert-dismissible alert-danger">
          <strong>Allready submitted the answers.</strong> Can not modify Answers.
        </div>
        </div> : null }
      <div className="contOnes">
        <ButtonGroup size="lg" className="mb-2">
          <Button style={{ border: " 2px  solid blue", borderColor: "#002966", buttonRadius: "50px" }}
            id='OPG' onClick={() => onClickHandler2()} className="ground">
            DPT 
            {/* OPG */}
          </Button>
          <Button style={{ border: " 2px  solid blue", borderColor: "#002966", buttonRadius: "50px" }}
            id='IOPA' onClick={() => onClickHandler4()} className="ground">
            IOPA
          </Button>
          <Button style={{ border: " 2px  solid blue", borderColor: "#002966", buttonRadius: "50px" }}
            id='Bitewing' onClick={() => onClickHandler5()} className="ground">
            Bitewing
          </Button>
          <Button style={{ border: " 2px  solid blue", borderColor: "#002966", buttonRadius: "50px" }}
            id='cbct' onClick={() => onClickHandler7()} className="ground">
            CBCT
          </Button>
          <Button style={{ border: " 2px  solid blue", borderColor: "#002966", buttonRadius: "50px" }}
            id='Other' onClick={() => onClickHandler6()} className="ground">
            Other
          </Button>
        </ButtonGroup>
      </div>
      <div className='contThr'>
        {exam_inv.opg ?
          <OPG /> :
          null
        }
        {exam_inv.iopg ?
          <IOPG /> :
          null
        }
        {exam_inv.bitewing ?
          <Bitewing /> :
          null
        }
        {exam_inv.other ?
          <Other /> :
          null
        }
        {exam_inv.cbct ?
          <CBCT /> :
          null
        }

        {
          !exam_inv.iopg && !exam_inv.opg && !exam_inv.bitewing && !exam_inv.other && !exam_inv.cbct ?
            <div>

           {!radioSelections ? 
           
            <div className='mainqs' style={sentencestyle2}> No selection yet!!</div>
           :  null } 
            </div>
            // <IOPG/> 

            : null
        }
        

      </div>
    </div>
  );
};


export default Radio;