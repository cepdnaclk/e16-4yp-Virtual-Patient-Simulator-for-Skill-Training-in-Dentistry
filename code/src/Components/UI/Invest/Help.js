import './Case.css'
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import help from "../../../Images/help.gif"

function ToothGIF() {

  
    return (
    <div>
     <div className='examImage'>
                  <img
                  src={help}
                  style={{ width: '50%', height: '50%', margin: 'auto', display: 'block', top: '80%' }}
                  alt="Loading..."
                />
                </div>

     
    </div>
    );
  }
  
  export default ToothGIF;
  