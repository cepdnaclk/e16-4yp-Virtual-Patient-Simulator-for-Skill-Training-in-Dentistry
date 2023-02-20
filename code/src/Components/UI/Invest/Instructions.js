import './Case.css'
import React from 'react';
import helpGif from "../../../Images/help.gif"
import Help from './Help'
import Grid from '@mui/material/Grid';

function Instructions() {
    return (
      <div>
        <div className="title3">
          Choose the resources you want for the patient Examination from the given tabs
        </div>
        <div className="insgrid">
          <Grid container spacing={1}>
              <Grid Item xs={8}>
                  <div className='fontForlist2'>
                    <div className="alert alert-dismissible alert-secondary" >
                      Examination phase contains the following sections and subsections
                      
                      <li>
                      Extra-oral view - Description of the physical appearence of the patient
                      </li>
                      <li>
                      Intra-oral view - Subsection for intra-oral view, Periodontal chart, Plaque chart and soft tissue assessment
                      </li>
                      <li>
                      In intra-oral view use your mouse pointer to see 3D view.
                      </li>
                      </div>
                    </div>
                  </Grid>
                  <Grid Item xs={4}>
                  <Help/>
                  </Grid>
                  </Grid>
                  </div>


    </div>

        
        
      
    )
  }
  
  export default Instructions;
  