// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ExaminationActions } from '../../../../Actions/Examination/ExaminationActions';
import { ScoreActions } from '../../../../Actions/Score/ScoreActions';
import { connect } from 'react-redux'
import { Grid, Card } from '@mui/material';

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

const options = [ 11, 12, 13, 14, 15, 16, 17, 18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44,45,46,47,48];

class Resto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooth: "",
      selectedList: [],
      type:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
      this.addData=this.addData.bind(this)
    this.clearList = this.clearList.bind(this);
    this.calculateScore = this.calculateScore.bind(this)
  }
  clearList() {
    this.setState({ selectedList: [] });
    this.props.clearResto()
    this.props.setRestorationScore(0)
  }
  componentDidMount() {
    this.setState({
      selectedList: this.props.restorationsSelected
    }
    )
    console.log(this.props.selectedCaseDetails.restorationsList)
    if (this.props.selectedCaseDetails.restorationsList.length == 0) {
      this.props.setRestorationScore(2.5)
    }
  }

  handleChange(e) {
    const val = e.target.value
    console.log("Tooth Selected!!");
    this.setState({ tooth: e.target.value });
    // this.setState(prevState => ({
    //   selectedList: [...prevState.selectedList, e.target.value]
    // }))
    // this.props.setSelectedRestorations(e.target.value)
    // this.calculateScore(val)

  }

  handleChange2(e){
    this.setState({ type: e.target.value });
  }
  addData(){

    let pair=[[this.state.tooth,this.state.type]]
    let arr1=this.state.tooth+' '+this.state.type
    let list=this.state.selectedList
    let canAdd=true
    for(let i=0;i<list.length;i++){
      console.log(list[0][0])
      if(list[i][0].includes(this.state.tooth) && list[i][0].includes(this.state.type )){
        canAdd=false
      }
    }
   
    if(canAdd){
      this.setState(prevState => ({
        selectedList: [...prevState.selectedList, pair]
      }))
      this.props.setSelectedRestorations(pair)
      this.props.setNewResto(arr1)
      this.calculateScore()
    }
  }

  calculateScore(val) {
    const answers = this.props.selectedCaseDetails.restorationsList
    const typeAns=this.props.selectedCaseDetails.restorationTypes
    let count = 0
    let wrongCount = 0
    const selectedList = this.state.selectedList
    console.log(selectedList)
    for (let i = 0; i < answers.length; i++) {
      for (let j = 0; j < selectedList.length; j++) {

        if (selectedList[j][0].includes(answers[i])&& selectedList[j][0].includes(typeAns[i])) {
          count++
        }
        // else if (answers[i] != selectedList[j] && !answers.includes(selectedList[j])) {
        //   wrongCount++
        // }
        // do something for each key in the object 
      }
    }
    for (let i = 0; i < answers.length; i++) {
      if (answers[i]==this.state.tooth&& typeAns[i]==this.state.type) {
        count++
      }
      // else if (answers[i] != val && !answers.includes(val)) {
      //   wrongCount++
      // }
    }
    console.log(count, ':', wrongCount)


    const weightExam = 1.5 / 2
    // let score = 100 * (weightExam / 10) * (1 / 3) * (count / answers.length)
    // score = score - 100 * (weightExam / 10) * (1 / 3) * (wrongCount / (6 - answers.length))
    // console.log(count, 'countw', wrongCount)

    // if (count == answers.length) {
    //   let score = 100 * (weightExam / 10) * (1 / 3)
    //   this.props.setRestorationScore(score)
    // }
    // else if (count < answers.length) {
    //   let score = 100 * (weightExam / 10) * (1 / 3) * (count / answers.length)
    //   this.props.setRestorationScore(score)
    // }

      let score=0
      if(wrongCount< count){
        score = 100*(weightExam/10)*(1/3)*((count-wrongCount)/answers.length)
      }
      else{
        score=0
      }
      this.props.setRestorationScore(score)
  }

  render() {
    return (
      <div>
        <div id="App">
          <Grid container>
            <Grid Item xs={6}>
            <FormControl variant="standard" sx={{ m: 1,width: 500, height: 100 }}>
            <InputLabel className="dd1" id="demo-simple-select-standard-label"><div className='dlabel'>Tooth</div></InputLabel>
            <select className="dd1" value={this.state.tooth} onChange={this.handleChange} labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard">
              {options.map((option) => (
                <option value={option} className="dd">{option}</option>
              ))}
            </select>
            </FormControl>
            </Grid>
            <Grid Item xs={6}>
            <div>
            <FormControl variant="standard" sx={{ m: 1,width: 200, height: 100 }}>
              <InputLabel className="dd1" id="demo-simple-select-standard-label"><div className='dlabel'>Type</div></InputLabel>
              <select className="dd1" value={this.state.value} onChange={this.handleChange2} labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard">
                <option value='' className="dd"></option>
                <option value='Palatal composite restoration' className="dd">Palatal composite restoration </option>
                <option value='Distal amalgam restoration' className="dd">Distal amalgam restoration </option>
                <option value='Palatal GIC restoration' className="dd">Palatal GIC restoration</option>
                <option value='Occlusal deep dentinal caries' className="dd">Distal composite restoration</option>
                <option value='Mesial amalgam restoration' className="dd">Mesial amalgam restoration</option>
                <option value='Mesial composite restoration' className="dd">Mesial composite restoration</option>
                <option value='Mesial GIC restoration' className="dd">Mesial GIC restoration</option>
                <option value='Distal GIC restoration' className="dd">Distal GIC restoration</option>
                <option value='Mesial to distal composite restoration' className="dd">Mesial to distal composite restoration</option>
                <option value='Mesial composite restoration' className="dd">Mesial composite restoration</option>
              </select>
              </FormControl>
            </div>
            </Grid></Grid>
            <div className='carcard'>
              <Card >
          {this.props.restorationsSelected ? this.props.restorationsSelected.map(number => (
            <div className='carlabel'>{number[0]} &nbsp;{number[1]}
            </div>
          )) : null}
          </Card>
            </div>

          </div>
        <Grid container>
          <Grid Item xs={7}>
          	<button type="button" class="btn btn-primary" fdprocessedid="b3ntkd" onClick={this.addData}>Add List</button>
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
  ...state,
  restorationsSelected: state.examination.restorationsSelected,
  selectedCaseDetails: state.caseSelected.selectedCaseDetails

  // error_msg : state.products.error_msg
});

const mapActionsToProps = {
  setSelectedRestorations: ExaminationActions.setSelectedRestorations,
  clearResto: ExaminationActions.clearResto,
  setRestorationScore: ScoreActions.setRestorationScore,
  setNewCarries:ExaminationActions.setNewCarries,
  setNewResto:ExaminationActions.setNewResto
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Resto);