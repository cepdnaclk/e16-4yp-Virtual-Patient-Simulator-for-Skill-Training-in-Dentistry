import './Case.css'
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ToothGIF from './ToothGIF';



function Extra() {

  
    return (
    <div>
      <div className='contsix'>
        <div class="grid-container">
          <div class="grid-item item1">
                <div className='status'>
                <Stack sx={{ width: '50%' }} spacing={2}>
                  <Alert severity="success">The patient looks fit & healthy!</Alert>
                </Stack>
    </div>          
              </div>
              <div class="grid-item item2">
                  
                       <ToothGIF/> 
                  
               </div>
              </div>
              
        </div> 
    </div>
    );
  }
  
  export default Extra;
  