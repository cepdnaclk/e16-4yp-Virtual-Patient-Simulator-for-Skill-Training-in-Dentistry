import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import img2 from "../../../Images/case2.jpg";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {CaseActions} from "../../../Actions/Case/CaseActions"
import { connect } from 'react-redux';

export class CaseCard extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.handleClick = this.handleClick.bind(this)
      }


     
    handleClick = (e) => {
      console.log(e.target.innerHTML) 
      const caseid=e.target.innerHTML
      const  {caseSelected,allCaseData} =this.props
      for(let item of allCaseData){
        if(item.caseId==caseid){
          this.props.setSelectedCase(item)
        }
      }
      console.log(allCaseData,"all cases")
      // this.props.setSelectedCase(e)
         
     };
  render() {
    const {caseSelectedInUI } = this.props;
    console.log("products at card: ",caseSelectedInUI)
    if(caseSelectedInUI){
    return(
     
        <div >
          <Card sx={{ maxWidth: 445 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="200"
                              alt="Case 1"
                              image={caseSelectedInUI.frontImage}
                            /> 
                            <CardContent>
                            <div className='case'>
                        Case {caseSelectedInUI.name}
                        </div>
                        <div className='casesubheading'>
                        {caseSelectedInUI.caption}!
                        </div>
                              <Typography className="caseBtn">
                                {/* <button onClick={this.handleClick(e)}> */}
                              <Link to="/historyTaking">
                                  <Chip id={caseSelectedInUI.caseId} label={caseSelectedInUI.caseId}  color="primary" size="medium" onClick={(e)=>this.handleClick(e)} />
                              </Link>
                              {/* </button> */}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                    </Card>
          
      </div>
    
    );
  }
  else{
    <div>No case</div>
  }
  }
}

const mapStateToProps = state => ({
  selectedCaseDetails : state.caseSelected.selectedCaseDetails,
  allCaseData:state.caseSelected.allCaseData


});

const mapActionsToProps = {
  setSelectedCase: CaseActions.setSelectedCase
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CaseCard);

// export default CaseCard;

