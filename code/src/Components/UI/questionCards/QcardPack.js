import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Qcard from './Qcard';


export class QcardPack extends Component {
  render() {
    const {questionList } = this.props;
    console.log("products at moviecard: ",questionList)
  
    const content = [];
    if (questionList !== undefined)
      for (let item of questionList) {
        const row = (
          <Qcard  oneQuestion={item} />
        );
        content.push(row);
      }

    return(
     
        <div class="list-group">
          {content}
          
      </div>
    
    );
  }
}

export default QcardPack;