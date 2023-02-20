import './Case.css'
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import toothForExam from "../../../Images/toothForExam.gif"

function ToothGIF() {

  
    return (
    <div>
     <div className='examImage'>
                  <img
                  src={toothForExam}
                  style={{ width: '300px', height: '300px', margin: 'auto', display: 'block', top: '80%' }}
                  alt="Loading..."
                />
                </div>

     
    </div>
    );
  }
  
  export default ToothGIF;
  