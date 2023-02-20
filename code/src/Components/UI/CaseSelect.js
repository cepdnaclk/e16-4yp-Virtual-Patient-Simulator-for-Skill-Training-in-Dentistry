import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import background from "../../Images/DentistryBackgound.jpg";
import React, { useEffect,useState, Fragment } from 'react';
import { useSelector,useDispatch} from "react-redux";
import './Case.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate, Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import firebase from '../../Config/Config'
import img1 from "../../Images/case1.png";
import img2 from "../../Images/case2.jpg";
import img3 from "../../Images/newBack.jpg";
import Navbar from '../Navbar';
import CaseCard from "./caseSelect/CaseCard"
import { CaseActions } from '../../Actions/Case/CaseActions';

function CaseSelect() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    const {userInfomation} = useSelector((state) => state.user)
    const {allCaseData} = useSelector((state) => state.caseSelected)
    

    const navigate = useNavigate();
    const [cases,setCase]=useState([])
    const dispatch = useDispatch()

    const handleClick = () => {
    console.log("  button clicked")
      navigate('/historyTaking');
      
    };

    useEffect(() => {
      fetchCase();
    }, []);
   
  
    const fetchCase=async()=>{
      const snapshot = await firebase.firestore().collection('Cases').get()
      const qArray= snapshot.docs.map(doc => doc.data())
      console.log(qArray);
      if(cases.length<qArray.length){
      setCase(qArray);
      dispatch(CaseActions.setAllCases(qArray));
      }
      
      console.log(cases);
    }
   console.log(userInfomation.name)
    return (
          <div className ="app" style={{
              backgroundImage: `url(${img3})`,
                height:'100vh',
                marginTop:'0px',
              fontSize:'50px',
              backgroundSize: 'cover',
              }}>
                <div className='navText'>
              <Navbar/>
              </div>
              
              <div className='cstopic1'>Case Selection</div>
              <div className='CScases'>
              <Grid container spacing={1}>
                {cases.map(function(object){
                    return (
                      <Grid Item xs={6}>
                      <div className='CScards'>
                      <CaseCard caseSelectedInUI={object}/>
                      </div>
                      </Grid>
                    );
                })}
                
              </Grid>
              </div>
          </div>
    );
}

export default CaseSelect;