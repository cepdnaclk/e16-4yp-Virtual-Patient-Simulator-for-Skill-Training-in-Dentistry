import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {DiagnosisActions} from '../../../../Actions/Diagnosis/DiagnosisActions'
import {connect} from 'react-redux'

export class Qcard extends Component {
    constructor(props) {
        super(props);
        this.state={
            question:{},
            isSubmit:false,
            studentCorrectAnswers:[],
            studentWrongAnswers:[],
            testArray:[]
        }
       // this.handleEvent = this.handleEvent.bind(this); 
        this.handleChange = this.handleChange.bind(this);
        this.isChecked=this.isChecked.bind(this)
      }

    componentDidMount(){
      
    if(this.props.isSubmitDiagnosis){
      var inputs = document.getElementsByTagName("input"); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].disabled = true;
    } 
    }

    }

    isChecked(data){
      let ques=this.props.oneQuestion[0]
      for(let i=0; i< this.props.selectedAnsForDiagnosisQ.length;i++){
        if(this.props.oneQuestion[0].id==this.props.selectedAnsForDiagnosisQ[i].id){
         this.state.studentCorrectAnswers=this.props.selectedAnsForDiagnosisQ[i].studentCorrectAnswers
         this.state.studentWrongAnswers=this.props.selectedAnsForDiagnosisQ[i].studentWrongAnswers
          console.log('check')
        }
      }
  
      if(this.state.studentCorrectAnswers.includes(data)){
        return true
      }
      if(this.state.studentWrongAnswers.includes(data)){
        return true
      }

    }


    handleChange=(e)=>{
   
      if(this.props.isSubmitDiagnosis){
        var inputs = document.getElementsByTagName("input"); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].disabled = true;
    } 
      //   document.getElementById(e.target.value).disabled=true
      // }
      // if(this.props.isSubmitDiagnosis){
      //   for(let i=0; i< this.props.allDignosisQ.length;i++){
      //     let allQ=this.props.allDignosisQ
      //     if(this.props.oneQuestion[0].id==this.props.allDignosisQ[i].id){
      //       for(let j=0; j< allQ[i].a.length ;j++){
      //         document.getElementById(allQ[i].a[j]).disabled=true
      //       }
      //     }
      //   }
      }
      

        if(!e.target.checked){ //code to remove
          let variable1=e.target.value
          var arrayC = [...this.state.studentCorrectAnswers]; // make a separate copy of the array
          var arrayW= [...this.state.studentWrongAnswers];
          var index = arrayC.indexOf(e.target.value) 
          var index2 = arrayW.indexOf(e.target.value) 
          if(this.state.studentCorrectAnswers.includes(e.target.value)){
            let array=[index,this.state.question.q]
            this.props.setCorrectDiagnosisQ(array)
          }
          if(this.state.studentWrongAnswers.includes(e.target.value)){
            console.log('inside qcard')
            let array=[index2,this.state.question.q]
            this.props.setWrongDiagnosisQ(array)
          }
          
          
          // console.log(index,':',array)
        
          //   this.setState({
          //     testArray: this.state.studentCorrectAnswers.filter((_, i) => i !== index)
          //   });

          //  // array.splice(index, 1);
          //  // console.log(array,array.length)
          //  // this.setState({studentCorrectAnswers: array});
          
          
          // console.log(this.state.testArray,this.state.studentCorrectAnswers.length )
        }
        

        if(e.target !== undefined && !this.state.isSubmit && !this.props.isSubmitDiagnosis && e.target.checked){
        
          const id =e.target.id
        const allQ = this.props.allDignosisQ
        for ( let i =0; i< allQ.length; i++){
          if(allQ[i].id==e.target.id){
            console.log('hii')
            if(allQ[i].correct.includes(e.target.value)){
              //this.props.setCorrectDiagnosisQ(allQ[i])
              this.setState(state => {
                if(!state.studentCorrectAnswers.includes(e.target.value)){
                 const list = state.studentCorrectAnswers.push(e.target.value);
                }
              });
              

            }
            else{
              this.setState(state => {
                if(!state.studentWrongAnswers.includes(e.target.value)){
                 const list = state.studentWrongAnswers.push(e.target.value);
                }
              });
              
            }
            this.props.setSelectedAnsForDQ(
              {
                q:allQ[i].q,
                studentCorrectAnswers:this.state.studentCorrectAnswers,
                studentWrongAnswers:this.state.studentWrongAnswers,
                id:allQ[i].id,
                correctCount: allQ[i].correct.length,
               correctAnst: allQ[i].correct
              }
            )
          }
        }

      }
    }

    render() {
      const {oneQuestion} = this.props;
      this.state.question=oneQuestion[0]
      this.state.isSubmit=oneQuestion[1] | this.props.isSubmitDiagnosis
      
      return(
       
        <div >
        <div className='qns'>{this.state.question.q}</div>
       
        <fieldset class="form-group">

      {this.state.question && this.state.question.a.map(filteredName => (
                      
                      <div class="form-check">
                      <input  
                      defaultChecked={this.isChecked(filteredName)}
                       class="form-check-input" type="checkbox" id={this.state.question.id} value={filteredName} onChange={this.handleChange}/>
                      <label class="form-check-label" for="flexCheckDefault">
                        {filteredName}
                      </label>
                    </div>
                    ))}
       
      </fieldset>


        </div>
      );
    }
  }
  
  
  const mapStateToProps = state => ({
    ... state,
    correctDiagnosisQ : state.diagnosisQ.correctDiagnosisQ,
    wrongDiagnosisQ : state.diagnosisQ.wrongDiagnosisQ,
    allDignosisQ : state.diagnosisQ.allDignosisQ,
    selectedAnsForDiagnosisQ : state.diagnosisQ.selectedAnsForDiagnosisQ,
    isSubmitDiagnosis:state.diagnosisQ.isSubmitDiagnosis
    // error_msg : state.products.error_msg
  });

  const mapActionsToProps={
    setDiagnosisAllQ: DiagnosisActions.setDiagnosisAllQ,
    setCorrectDiagnosisQ : DiagnosisActions.setCorrectDiagnosisQ,
    setWrongDiagnosisQ:DiagnosisActions.setWrongDiagnosisQ,
    setSelectedAnsForDQ:DiagnosisActions. setSelectedAnsForDQ,
    removeCorrectDiagnosisQ:DiagnosisActions.removeCorrectDiagnosisQ,
    removeWrongDiagnosisQ:DiagnosisActions.removeWrongDiagnosisQ
 
  }
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
    )(Qcard);
  

/*
    handleEvent(e){

      if(e.target !== undefined && !this.state.isSubmit && !this.props.isSubmitDiagnosis){
        console.log(e.target.id)
        console.log(e.target.innerHTML)
        const id =e.target.id
      
        const allQ = this.props.allDignosisQ
        console.log(allQ)
        for ( let i =0; i< allQ.length; i++){
          console.log(allQ[i].id)
          if(allQ[i].id==e.target.id){
           
            if(allQ[i].correct==e.target.innerHTML){
              console.log('insert')
              this.props.setCorrectDiagnosisQ(allQ[i])
              this.props. setSelectedAnsForDQ(
                {
                  q:allQ[i].q,
                  studentAnswer:e.target.innerHTML,
                  id:allQ[i].id,
                  correctness: true
                }
              )
            }
            else{
              this.props.setWrongDiagnosisQ({
                q:allQ[i].q,
                studentAnswer:e.target.innerHTML,
                id:allQ[i].id, 
                CorrectAnswer:allQ[i].correct
              })
              this.props. setSelectedAnsForDQ(
                {
                  q:allQ[i].q,
                  studentAnswer:e.target.innerHTML,
                  id:allQ[i].id,
                  correctness: false
                }
              )
            }
          }
        }

      }
      
    }

*/

