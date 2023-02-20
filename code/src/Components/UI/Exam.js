import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import background from "../../Images/HistoryBack.jpeg";
import img1 from "../../Images/images.jpeg";
import React, { useEffect,useState, Fragment } from 'react';
import './Case.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ThreeD from './resources/ThreeD';
import Investigation from './resources/Investigation';
import Mark from './resources/Mark'
import Xray  from './resources/Xray';
import Instructions from './resources/Instructions';
import img2 from "../../Images/invBck2.webp";
import img3 from "../../Images/newBack.jpg";
import Grid from '@mui/material/Grid';
import { useSelector} from "react-redux";
import giphy from '../../Images/giphy.gif';
import Navbar from '../Navbar';


const Exam = () => {
  const {userInfomation} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    ground: false
  });
  const [exam_inv, setexam_inv] = useState({
    intra: false,
    radio: false,
    lab: false,
    mark: false,
    help: false,
    xray: false
  });

  const onClickHandler2 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: true,
    radio: false,
    lab: false,
    mark: false,
    xray : false,
    help: false
    })
  };

  const onClickHandler3 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: false,
    radio: false,
    lab: false,
    mark: false,
    xray : true,
    help: false
    })
    const btn1 = document.getElementById('xray');
    btn1.style.backgroundColor = 'rgb(95,129,182)';
    const btn2 = document.getElementById('Radio');
    btn2.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn3 = document.getElementById('Invest');
    btn3.style.backgroundColor =  'rgb(9, 105, 239)';
    const btn4 = document.getElementById('Help');
    btn4.style.backgroundColor =  'rgb(9, 105, 239)';
  };

  const onClickHandler4 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: false,
    radio: false,
    lab: true,
    mark: false,
    xray : false,
    help: false
    })
    const btn1 = document.getElementById('Help');
    btn1.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn2 = document.getElementById('Radio');
    btn2.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn3 = document.getElementById('Invest');
    btn3.style.backgroundColor =  'rgb(95,129,182)';
    const btn4 = document.getElementById('xray');
    btn4.style.backgroundColor =  'rgb(9, 105, 239)';


  };
  const onClickHandler5 = () => {
    // console.log("button clicked")
    // setexam_inv({
    //   intra: false,
    // radio: false,
    // lab: false,
    // mark: false,
    // xray : true,
    // help: false
    // })
    navigate('/page3');
  };
  const handleClick = () => {
    navigate('/diagnosis');  
  };
  const handleClick1 = () => {
    navigate('/page4');  
  };
  const onClickHandler6 = () => {
    console.log("button clicked")
    setexam_inv({
      intra: false,
    radio: false,
    lab: false,
    mark: false,
    xray : false,
    help: true
    })
    const btn1 = document.getElementById('Help');
    btn1.style.backgroundColor = 'rgb(95,129,182)';
    const btn2 = document.getElementById('Radio');
    btn2.style.backgroundColor = 'rgb(9, 105, 239)';
    const btn3 = document.getElementById('Invest');
    btn3.style.backgroundColor =  'rgb(9, 105, 239)';
    const btn4 = document.getElementById('xray');
    btn4.style.backgroundColor =  'rgb(9, 105, 239)';


  };

  const onClickHandler = (order) => {
    const resetImages = {
      first: false,
      second: false,
      ground: false
    };
    setImageClicked({
      ...resetImages,
      [order]: true
    });
  };
  return (
    <div className ="app" style={{
        backgroundImage: `url(${img2})`,
        height:'200vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        }}>
        <div className='navText'>
              <Navbar/>
              </div>
          <div>
                <Grid container spacing={20}>
                <Grid item xs={4}>
                  <div className='backbtn'>
                    <button  className="back"  size="medium" onClick={handleClick1}>Back</button>
                  </div>
                  </Grid>
                  <Grid item xs={4}>
                  <div className="exmbtn">
                    <button className="back" size="medium" onClick={handleClick}>Next</button>
                    </div>
                  </Grid>
                </Grid>
            </div>
          <div className='Intopic'>Investigations</div>
              {/* <div className='instr'>
        {
          !exam_inv.mark && !exam_inv.lab && !exam_inv.intra && !exam_inv.xray ? <Instructions/> : null
        }
        </div> */}
      <div className="InExamsect" >
        
        <ButtonGroup size="lg" className="btnGrp">
            {/* <Button onClick={() => onClickHandler2()} className="ground">
            Intra-Oral-View
            </Button> */}
            {/* <Button onClick={() => onClickHandler3()} className="ground">
            Dental Chart
            </Button> */}
            <Button style={{ border: " 2px  solid blue", borderColor:"#002966" , buttonRadius:"50px" }} 
            id='Radio' type="button" class="btnGrp" onClick={() => onClickHandler5()} className="ground">
            Radiographs
            </Button>
            <Button style={{ border: " 2px  solid blue", borderColor:"#002966", buttonRadius:"50px" }} id='Invest'  type="button" class="btnGrp" onClick={() => onClickHandler4()} className="ground">
            Sensibility Recordings
            </Button>
            <Button style={{ border: " 2px  solid blue", borderColor:"#002966", buttonRadius:"50px" }} id='xray'  type="button" class="btnGrp" onClick={() => onClickHandler3()} className="ground">
            Haematological assessments
            </Button>
            <Button style={{ border: " 2px solid blue", borderColor:"#002966", buttonRadius:"50px" }}
            id='Help'type="button" class="btnGrp" onClick={() => onClickHandler6()} className="ground">
          Guide
            </Button>
        </ButtonGroup>
        </div>
        <div className='contThr'>
        {exam_inv.intra ?
           <ThreeD /> :
           null
        }
        {exam_inv.lab ?
           <Investigation /> :
           null
        }
        {exam_inv.mark ?
           <Mark /> :
           null
        }
        { exam_inv.xray ?
           <Xray/> :
           null
        }
        {exam_inv.help ?
           <Instructions/> :
           null
        }
        {
          !exam_inv.mark && !exam_inv.lab && !exam_inv.intra && !exam_inv.xray && !exam_inv.help ? <Instructions/> : null
        }
        
      </div>
      <img src={giphy} className="invGif" />
      <div className="image">
        {imageClicked.ground && <img src={background} alt="ground" />}
        {imageClicked.first && <img src={img1} alt="first" />}
        {imageClicked.second && <img src={background} alt="second" />}
      </div>
    </div>
  );
};


export default Exam;