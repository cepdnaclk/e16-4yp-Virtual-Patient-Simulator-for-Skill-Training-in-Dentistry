import { getQueriesForElement } from '@testing-library/react'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {createTest} from '../../Actions/historyTakingQ/historyTakingActions'

import firebase from '../../Config/Config'

class HistoryTakingQ extends Component {

    componentDidMount(){
       this.props.createTest({"messsage":"hello Test today"});
      console.log(this.getQ());

    }
     async getQ(){
    //   firebase.firestore().collection("HistoryTakingQ").doc("habits").get().then((querySnapshot) => {
            
    //     // Loop through the data and store
    //     // it in array to display
    //     querySnapshot.forEach(element => {
    //         var data = element.data();
    //         //setInfo(arr => [...arr , data]);
    //         console.log("data:",data)
             
    //     });
        
    // })
    const snapshot = await firebase.firestore().collection('C001').get()
    return snapshot.docs.map(doc => doc.data());
    // var qList={}
    // firebase.firestore().collection("test2").onSnapshot(
    //   (snapshot)=>{
    //     qList = snapshot.docs.map(
    //       (doc)=>({
    //         data:doc.data()
    //       })
    //     )
    //   }
    // );
    // console.log(qList)

     }

  render() {
    
    console.log(this.props.projects);
    //const { projects } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          historyTakingQ
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
   // projects: state.firestore.data
  }
}
const mapActionsToProps = {
    createTest : createTest
}

export default compose(
  connect(mapStateToProps,mapActionsToProps),
  // firestoreConnect([
  //   { collection: 'test' }
  // ])
)(HistoryTakingQ)

