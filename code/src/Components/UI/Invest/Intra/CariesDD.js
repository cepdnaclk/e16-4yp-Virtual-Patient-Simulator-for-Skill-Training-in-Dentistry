// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import { ExaminationActions } from '../../../../Actions/Examination/ExaminationActions';
import { ScoreActions } from '../../../../Actions/Score/ScoreActions';
import {connect} from 'react-redux'
import { Grid } from '@mui/material';
import {Card} from '@mui/material';
 // import Select from '@mui/material/Select';

// export default function CariesDD() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           value={age}
//           onChange={handleChange}
//           label="Age"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
          
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }

import React from "react";
import { maxHeight } from '@mui/system';

const options = [ 11, 12, 13, 14, 15, 16, 17, 18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44,45,46,47,48];

class CariesDD extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tooth: "1",
        selectedList:[],
        type:''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.addData=this.addData.bind(this)
      this.clearList = this.clearList.bind(this);
      this.calculateScore=this.calculateScore.bind(this)
    }
    clearList(){
      this.setState({ selectedList: [] });
      this.props.clearCaries()
      this.props.setCariesScore(0)
    }
    componentDidMount(){
      this.setState({
        selectedList: this.props.cariesSelected }
      )
    }
  
    handleChange(e) {
      const val=e.target.value
      console.log("Tooth Selected!!");
      this.setState({ tooth: e.target.value });
      // this.setState(prevState => ({
      //   selectedList: [...prevState.selectedList, e.target.value]
      // }))
      // this.props.setSelectedCaries(e.target.value)
      // this.calculateScore(val)

    }
    handleChange2(e){
      this.setState({ type: e.target.value });

    }

    addData(){

      let pair=[[this.state.tooth,this.state.type]]
      let arr1=this.state.tooth+" "+this.state.type
      let list=this.state.selectedList
      let canAdd=true
      for(let i=0;i<list.length;i++){
        console.log(list[0][0])
        if(list[i][0].includes(this.state.tooth) && list[i][0].includes(this.state.type )){
          canAdd=false
        }
      }
      console.log(canAdd)
      if(canAdd){
        this.setState(prevState => ({
          selectedList: [...prevState.selectedList, pair]
        }))
        this.props.setSelectedCaries(pair)
        this.calculateScore()
        this.props.setNewCarries(arr1)
      }
    }

    calculateScore(){
      let val=this.state.tooth
      let type=this.state.type
      const answers=this.props.selectedCaseDetails.cariesList
      const typeAns=this.props.selectedCaseDetails.cariesTypes

      let count=0
      let wrongCount=0
      const selectedList =this.state.selectedList
      for(let i=0;i<answers.length;i++){
        for (let j=0;j<selectedList.length;j++) {
        
            if(selectedList[j][0].includes(answers[i])&& selectedList[j][0].includes(typeAns[i])){
              count++
              console.log(count,':',answers[i])
            }
          //   else if (!selectedList[j][0].includes(answers[i][0]) && !answers.includes(selectedList[j])){
          //     wrongCount++
          //   }
          // // do something for each key in the object 
        }
      }
      for(let i=0;i<answers.length;i++){
        if(answers[i]==this.state.tooth&& typeAns[i]==this.state.type){
          count++
          console.log(count,':',answers[i])
        }
        // else if (answers[i]!=val && !answers.includes(val)){
        //   wrongCount++
        // }
      }
      console.log(count)


      const weightExam=1.5/2
      let score=0
      if(wrongCount< count){
        score = 100*(weightExam/10)*(1/3)*((count-wrongCount)/answers.length)
      }
      else{
        score=0
      }
      this.props.setCariesScore(score)
    //  score=score-100*(weightExam/10)*(1/3)*(wrongCount/(6-answers.length))
     
      
      // if(count==answers.length){
      //   let score = 100*(weightExam/10)*(1/3)
      //   this.props.setCariesScore(score)
      // }
      // else if(count<answers.length){
      //   let score = 100*(weightExam/10)*(1/3)*(count/answers.length)
      //   this.props.setCariesScore(score)
      // }
    }
  
    render() {
      return (
        <div>
        <div id="App">
          <Grid container>
            <Grid Item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, width: 400, height: 100 }}>
            <InputLabel variant="success" className="dd1" id="demo-simple-select-standard-label"><div className='dlabel'>Tooth</div></InputLabel>
            <select variant="success" className="dd1" value={this.state.tooth} onChange={this.handleChange} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">
              {options.map((option) => (
                <option value={option} className="dd">{option}</option>
              ))}
            </select>
            </FormControl>
            </Grid>
            <Grid Item xs={6}>
            <div>
            <FormControl variant="standard" sx={{ m: 1, width: 500, height: 100 }}>
            <InputLabel className="dd1" id="demo-simple-select-standard-label"><div className='dlabel'>Type</div></InputLabel>
            <select className="dd1" value={this.state.value} onChange={this.handleChange2} labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard">
              <option value='' className="dd"></option>
                <option value='Distal class II deep dentinal caries' className="dd">Distal class II deep dentinal caries</option>
                <option value='Distal class II caries' className="dd">Distal class II caries</option>
                <option value='Occlusal caries' className="dd">Occlusal caries</option>
                <option value='Occlusal deep dentinal caries' className="dd">Occlusal deep dentinal caries</option>
                <option value='Cervical caries' className="dd">Cervical caries</option>
                <option value='Class I dentinal caries' className="dd">Class I dentinal caries </option>
                <option value='Class II caries' className="dd">Class II caries</option>
                <option value='Class I dentinal caries' className="dd">Class I dentinal caries</option>
                <option value='Mesial class II dentinal caries' className="dd">Mesial class II dentinal caries</option>
                <option value='Distal class II dentinal caries' className="dd">Distal class II dentinal caries </option>
                <option value='Distal class II early dentinal caries' className="dd">Distal class II early dentinal caries</option>
            </select>
            </FormControl>
            </div>
            </Grid></Grid>
            <div className='carcard'>
              <Card >
            {this.props.cariesSelected? this.props.cariesSelected.map(number=> (
                <div className='carlabel'>{number[0]} &nbsp;{number[1]}</div>
            )) :null}
              </Card>
            </div>
            
        </div>
        <Grid container>
          <Grid Item xs={7}>
            <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd" onClick={this.addData}>Add</button>
          </Grid>
          <Grid Item xs={5}>
            <button type="button" class="btn btn-primary" fdprocessedid="b3ntkd" onClick={this.clearList}>Clear List</button>
          </Grid>
        </Grid>
        </div>
      );
    }
  }
  
 

const mapStateToProps = state => ({
    ... state,
    cariesSelected : state.examination.cariesSelected,
    selectedCaseDetails:state.caseSelected.selectedCaseDetails
    
    // error_msg : state.products.error_msg
  });

const mapActionsToProps={
    setSelectedCaries: ExaminationActions.setSelectedCaries,
    clearCaries:ExaminationActions.clearCaries,
    setCariesScore:ScoreActions.setCriesScore,
    setNewCarries:ExaminationActions.setNewCarries,
    setNewResto:ExaminationActions.setNewResto
  }

  export default connect(
    mapStateToProps,
    mapActionsToProps
    )(CariesDD);