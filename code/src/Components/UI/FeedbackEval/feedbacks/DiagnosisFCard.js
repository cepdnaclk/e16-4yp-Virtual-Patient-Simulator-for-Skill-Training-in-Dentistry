import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Table from 'react-bootstrap/Table';
import './Feed.css' 


export class DiagnosisFCard extends Component {
    render() {
      const { oneQuestion } = this.props;
      console.log(" at card: ",oneQuestion)

      return(
        <div>
        <div className='fdmain'>{oneQuestion.q}</div>
        <div className='fdtable2'>
          <Table striped bordered hover>
          <tbody>
            <tr>
              <th>Your correct  selections</th>
              <th>Your wrong selections</th>
              <th>Correct selections should be</th>
            </tr>
            <tr>
            <td>
            {oneQuestion.studentCorrectAnswers ? oneQuestion.studentCorrectAnswers.map(que=>
        <div>
          {que}
        </div>
        ):null}
              </td>
              <td>
              {oneQuestion.studentWrongAnswers ? oneQuestion.studentWrongAnswers.map(que=>
        <div>
          {que}
        </div>
        ):null}
              </td>
              <td>
              {oneQuestion.correctAnst? oneQuestion.correctAnst.map(que=>
        <div>
          {que}
        </div>
        ):null}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
        </div>
      );
    }
  }
  
  export default DiagnosisFCard;
  



