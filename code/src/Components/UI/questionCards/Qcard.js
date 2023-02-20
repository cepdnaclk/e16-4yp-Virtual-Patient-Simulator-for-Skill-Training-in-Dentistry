import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import './Qna.css'

export class ProductCard extends Component {
    render() {
      const { oneQuestion } = this.props;
      console.log(" at card: ",oneQuestion)

      return(
       
        <div>
        {/*<div className='section'>
                   {oneQuestion.cat==='complaint' ?
          <h4>History of the presenting complaint</h4> :null}
          {oneQuestion.cat==='habits' ?
          <h4>Habits</h4> :null}
          {oneQuestion.cat==='medicalH' ?
          <h4>Medical history</h4> :null}
          {oneQuestion.cat==='plaque' ?
          <h4>Plaque control</h4> :null}
          {oneQuestion.cat==='dhistory' ?
          <h4>Dietary history</h4> :null}
          {oneQuestion.cat==='pretreate' ?
          <h4>Previous dental treatments</h4> :null}
           {oneQuestion.cat==='shistory' ?
          <h4>Social history</h4> :null}
      </div>*/}
        <div className='qns'>{oneQuestion.q}</div>
        <div className='ans'>{oneQuestion.a}</div>
      { oneQuestion.image ? <img src={oneQuestion.image} height={150} width={300}  /> : null}
        
        </div>
      );
    }
  }
  
  export default ProductCard;
  



